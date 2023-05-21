const db = require('./db')
const { pool } = db
const bcrypt = require("bcrypt");

exports.postgresMigration = async function createTable() {
  let init_instructions =
    `CREATE TABLE IF NOT EXISTS parameter (
      _id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      intvalue BIGINT,
      charvalue VARCHAR(255)
    );
    INSERT INTO parameter(name, intvalue)
      SELECT 'version', 0
      WHERE NOT EXISTS (
        SELECT intvalue FROM parameter WHERE name = 'version'
      );`;

  await pool.connect((err, client, release) => {
    client.query(init_instructions, async (err, res) => {
      if (err) console.log("CREATE TABLE ->", err);
      if (res) {
        console.log("Postgres initialisation done");
        await
          client.query(`SELECT intvalue FROM parameter WHERE name = 'version';`, async (err, res) => {
            if (err) console.log(`Cannot get current version ->`, err);
            if (res) {
              bcrypt.hash(process.env.ADMINPASSWORD, 10, async function (err, hash) {
                let version = parseInt(res.rows[0]['intvalue'])
                console.log(`Current version ${version}`)
                let instructions = [
                  `CREATE TABLE IF NOT EXISTS user_role (
                _id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                is_admin BOOLEAN);`,
                  `INSERT INTO user_role(name, is_admin) VALUES
                ('Administrators', TRUE);`,
                  `CREATE TABLE IF NOT EXISTS softwareuser (
                  _id SERIAL PRIMARY KEY,
                  name VARCHAR(255) NOT NULL,
                  login VARCHAR(255) NOT NULL,
                  password VARCHAR(255) NOT NULL);`,
                  `INSERT INTO softwareuser(name, login, password) VALUES
                  ('${process.env.ADMINLOGIN}', '${process.env.ADMINLOGIN}', '${hash}');`,
                  `CREATE TABLE IF NOT EXISTS softwareuser_user_role (
                    user_id int REFERENCES softwareuser (_id) ON UPDATE CASCADE ON DELETE CASCADE
                  , user_role_id int REFERENCES user_role (_id) ON UPDATE CASCADE
                  , CONSTRAINT user_user_role_pkey PRIMARY KEY (user_id, user_role_id));`,
                  `INSERT INTO softwareuser_user_role(user_id, user_role_id) VALUES
                    (1, 1);`,
                  `CREATE TABLE IF NOT EXISTS blacklistedtoken (
                      _id SERIAL PRIMARY KEY,
                      token VARCHAR(255) NOT NULL);`,
                  `CREATE TABLE IF NOT EXISTS tablelist (
                        _id SERIAL PRIMARY KEY,
                        tablename VARCHAR(255) NOT NULL,
                        is_technical BOOLEAN);`,
                  `CREATE TABLE IF NOT EXISTS datatype (
                      _id SERIAL PRIMARY KEY,
                      type VARCHAR(255) NOT NULL,
                      define_length BOOLEAN,
                      default_length INT,
                      max_length INT,
                      define_precision BOOLEAN,
                      default_precision INT,
                      max_precision INT,
                      description VARCHAR(255));`,
                  `INSERT INTO datatype(type, define_length, default_length, max_length, define_precision, default_precision, max_precision, description) VALUES
                      ('boolean', FALSE, 0, 0, FALSE, 0, 0, 'Logical Boolean (true/false)'),
                      ('varchar', TRUE, 255, 10485760, FALSE, 0, 0, 'Variable-length character string'),
                      ('date', FALSE, 0, 0, FALSE, 0, 0, 'Calendar date (year, month, day)'),
                      ('integer', FALSE, 0, 0, FALSE, 0, 0, 'Signed four-byte integer (between -2147483648 and +2147483647)'),
                      ('numeric', TRUE, 30, 131072, TRUE, 10, 16383, 'Signed decimal/numeric with max precision up to 131072 digits before the decimal point; up to 16383 digits after the decimal poin'),
                      ('timestamp', FALSE, 0, 0, FALSE, 0, 0, 'Date and time (no time zone) (Between 4713 BC and 294276 AD)');`,
                  `CREATE TABLE IF NOT EXISTS fieldlist (
                        _id SERIAL PRIMARY KEY,
                        datatype_id INT NOT NULL REFERENCES datatype,
                        tablelist_id INT NOT NULL REFERENCES tablelist,
                        length INT,
                        precision INT,
                        name VARCHAR(255),
                        description VARCHAR(255));`,
                  `CREATE TABLE IF NOT EXISTS menu (
                          _id SERIAL PRIMARY KEY,
                          sequence INT,
                          name VARCHAR(255),
                          action VARCHAR(255),
                          tablelist_id INT REFERENCES tablelist,
                          description VARCHAR(255));`,
                  `CREATE TABLE IF NOT EXISTS submenu (
                            _id SERIAL PRIMARY KEY,
                            sequence INT,
                            menu_id INT NOT NULL REFERENCES menu,
                            name VARCHAR(255),
                            action VARCHAR(255),
                            tablelist_id INT REFERENCES tablelist,
                            description VARCHAR(255));`,
                  `INSERT INTO tablelist(tablename, is_technical) VALUES
                    ('user_role', TRUE),
                    ('softwareuser', TRUE),
                    ('softwareuser_user_role', TRUE),
                    ('blacklistedtoken', TRUE),
                    ('tablelist', TRUE),
                    ('datatype', TRUE),
                    ('fieldlist', TRUE),
                    ('menu', TRUE),
                    ('submenu', TRUE);`,
                  `CREATE TABLE IF NOT EXISTS books (
                              _id SERIAL PRIMARY KEY,
                              title VARCHAR(255) NOT NULL,
                              author VARCHAR(255) NOT NULL,
                              description VARCHAR(255) NOT NULL);`,
                  `INSERT INTO books(title, author, description) VALUES
                              ('PostgreSQL 11', 'Simon Riggs', 'Administration cookbook');`,
                  `INSERT INTO tablelist(tablename, is_technical) VALUES
                              ('books', FALSE);`,
                  `INSERT INTO fieldlist(datatype_id, tablelist_id, length, precision, name, description) VALUES
                              (2, 10, 255, 0, 'title', 'book title'),
                              (2, 10, 255, 0, 'author', 'book author'),
                              (2, 10, 255, 0, 'description', 'book description');`,
                  `INSERT INTO menu(name, sequence, action, tablelist_id, description) VALUES
                    ('Books', 10, 'list', 10, 'Books list');`,
                ]
                if (instructions.length > version) {
                  let currentVersion = instructions.length
                  instructions.splice(0, version)
                  console.log(`Updating ${instructions.length} instructions`)
                  //await instructions.forEach(async function callback(instruction, index) {
                  for (const [index, instruction] of instructions.entries()) {
                    client.query(instruction, (err, res) => {
                      if (err) {
                        console.log(`Error on migration ${index + version + 1} ->`, err);
                      }
                      if (res) { console.log(`Postgres datas succesfully migrated to version ${index + version + 1}`); }
                    });

                  }

                  await client.query(`UPDATE parameter SET intvalue = ${currentVersion} WHERE name = 'version'`, (err, res) => {
                    if (err) console.log(`Cannot update version number ->`, err);
                    if (res) { console.log(`Migration(s) done to version ${currentVersion}, you are ready to go`); }
                  });
                } else {
                  console.log('No migration needed, you are ready to go')
                }
              })
            }
          });
      }
    });
  });
};
