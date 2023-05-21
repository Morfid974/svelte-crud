const db = require('../db')
const { pool } = db
const userController = require('../Controllers/userController')
const { userControl } = userController


/** tablelist **/
const getTables = async (req, res) => {
    await userControl(req, res)
    const {
        rows
    } = await pool.query(`
    SELECT 
        _id,
        tablename as tablename,
        tablename as originalname,
        is_technical,
        ${nestQuery(`
            SELECT
                fieldlist._id,
                fieldlist.datatype_id,
                fieldlist.tablelist_id,
                fieldlist.length,
                fieldlist.precision,
                fieldlist.name,
                fieldlist.description
            FROM fieldlist
            WHERE fieldlist.tablelist_id = tablelist._id
        `)} AS fields
    FROM tablelist;`);
    res.send(rows);
};

const postTable = async (req, res) => {
    await userControl(req, res)
    const {
        tablename
    } = req.body;
    await pool.query(`CREATE TABLE IF NOT EXISTS ${tablename}(_id SERIAL PRIMARY KEY);`)
    const {
        rows
    } = await pool.query('INSERT INTO tablelist(tablename, is_technical) VALUES($1, FALSE);', [tablename]);
    res.json(rows);
};

const updateTable = async (req, res) => {

    await userControl(req, res)
    const {
        tablename,
        originalname,
        fields,
        removedFields,
        updatedFields
    } = req.body;
    if (tablename != originalname) {
        // Table name changed
        await pool.query('UPDATE tablelist SET tablename = $1 WHERE _id = $2;', [tablename, req.params.id]);
        await pool.query(`ALTER TABLE ${originalname} RENAME TO ${tablename};`);
    }
    for (let field in fields) {
        if (fields[field]._id == null) {
            await pool.query('INSERT INTO fieldlist(datatype_id, tablelist_id, length, precision, name, description) VALUES($1, $2, $3, $4, $5, $6);', [fields[field].datatype_id, req.params.id, fields[field].length, fields[field].precision, fields[field].name, fields[field].description]);
            switch (fields[field].datatypeName) {
                case 'varchar':
                    pool.query(`ALTER TABLE ${tablename} ADD COLUMN ${fields[field].name} varchar(${fields[field].length});`)
                    break;
                case 'numeric':
                    pool.query(`ALTER TABLE ${tablename} ADD COLUMN ${fields[field].name} numeric(${fields[field].length},${fields[field].precision});`)
                    break;
                default:
                    pool.query(`ALTER TABLE ${tablename} ADD COLUMN ${fields[field].name} ${fields[field].datatypeName};`)
                    break;
            }
        }
    }
    for (let removedField in removedFields) {
        //TODO: remove fields
    }
    for (let updatedField in updatedFields) {
        //TODO: update fields
    }

    res.json({ message: 'Data has been updated !' });
};

const deleteTable = async (req, res) => {
    await userControl(req, res)
    await pool.query(`DROP TABLE IF EXISTS ${req.params.name};`)
    const {
        rows
    } = await pool.query('DELETE FROM tablelist WHERE _id = $1;', [req.params.id]);
    res.json(rows);
};
/** datatype **/
const getDatatypes = async (req, res) => {
    await userControl(req, res)
    const {
        rows
    } = await pool.query('SELECT * FROM datatype;');
    res.send(rows);
};

/** helpers **/
function nestQuery(query) {
    return `
      coalesce(
        (
          SELECT array_to_json(array_agg(row_to_json(x)))
          FROM (${query}) x
        ),
        '[]'
      )
    `;
}

module.exports = {
    getTables,
    postTable,
    deleteTable,
    updateTable,
    getDatatypes,
};