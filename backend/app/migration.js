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
                  `CREATE TABLE IF NOT EXISTS books (
                    _id SERIAL PRIMARY KEY,
                    title VARCHAR(255) NOT NULL,
                    author VARCHAR(255) NOT NULL,
                    description VARCHAR(255) NOT NULL);`,
                  `TRUNCATE TABLE books;`,
                  `INSERT INTO books(title, author, description) VALUES
                    ('PostgreSQL 11', 'Simon Riggs', 'Administration cookbook');`,
                  `CREATE TABLE IF NOT EXISTS blacklistedtoken (
                      _id SERIAL PRIMARY KEY,
                      token VARCHAR(255) NOT NULL);`,
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
                      if (res) { console.log(`Postgres succesfully migrated to version ${index + version + 1}`); }
                    });

                  }

                  await client.query(`UPDATE parameter SET intvalue = ${instructions.length} WHERE name = 'version'`, (err, res) => {
                    if (err) console.log(`Cannot update version number ->`, err);
                    if (res) { console.log(`Migration(s) done to version ${currentVersion}`); }
                  });
                } else {
                  console.log('No migration needed')
                }
              })
            }
          });
      }
    });
  });
};
