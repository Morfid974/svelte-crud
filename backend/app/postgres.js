const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: "postgres",
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.DBPORT,
  connectionTimeoutMillis: 5000,
});

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
              let version = parseInt(res.rows[0]['intvalue'])
              console.log(`Current version ${version}`)
              let instructions = [
                `CREATE TABLE IF NOT EXISTS user_role (
                _id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                is_admin BOOLEAN);`,
                `INSERT INTO user_role(name, is_admin) VALUES
                ('Administrators', TRUE);`,
                `CREATE EXTENSION pgcrypto;`,
                `CREATE TABLE IF NOT EXISTS softwareuser (
                  _id SERIAL PRIMARY KEY,
                  name VARCHAR(255) NOT NULL,
                  password VARCHAR(255) NOT NULL);`,
                `INSERT INTO softwareuser(name, password) VALUES
                  ('${process.env.ADMINLOGIN}', crypt('${process.env.ADMINPASSWORD}', gen_salt('bf')));`,
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
              ]
              if (instructions.length > version) {
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
                  if (res) { console.log(`Migration(s) done to version ${instructions.length}`); }
                });
              } else {
                console.log('No migration needed')
              }
            }
          });
      }
    });
  });
};

exports.getBooks = async (req, res) => {
  const {
    rows
  } = await pool.query('SELECT * FROM books;');
  res.send(rows);
};

exports.getBookById = async (req, res) => {
  console.log('req')
  console.log(req)
  const {
    rows
  } = await pool.query('SELECT * FROM books WHERE _id = $1;', [req.params.id]);
  res.send(rows[0]);
};

exports.postBook = async (req, res) => {
  const {
    title,
    author,
    description
  } = req.body;
  const {
    rows
  } = await pool.query('INSERT INTO books(title, author, description) VALUES($1, $2, $3);', [title, author, description]);
  res.json(rows);
};

exports.updateBook = async (req, res) => {
  const {
    title,
    author,
    description
  } = req.body;
  const {
    rows
  } = await pool.query('UPDATE books SET title = $1, author = $2, description = $3 WHERE _id = $4;', [title, author, description, req.params.id]);
  res.json(rows);
};

exports.deleteBook = async (req, res) => {
  const {
    rows
  } = await pool.query('DELETE FROM books WHERE _id = $1;', [req.params.id]);
  res.json(rows);
};
