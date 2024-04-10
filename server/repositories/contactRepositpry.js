const { db_conection } = require('../db/db');

const tableName = 'contact';

async function getAllContactRepo() {
    try {
        const results = await db_conection.query(`SELECT * FROM ${tableName}`);
        return results;
    } catch (error) {
        throw new Error(`Internal Server Error: ${error}`);
    }
}

async function insertContactRepo(name, phone, title, avatarUrl) {
    try {
        const query = `INSERT INTO ${tableName} (name, phone, title, avatar_url) VALUES (?, ?, ?, ?)`;
        const values = [name, phone, title, avatarUrl];
        const result = await db_conection.query(query, values);
        return result.insertId; // Return the ID of the newly inserted contact
    } catch (error) {
        throw new Error(`Failed to add contact: ${error}`);
    }
}

async function updateContactRepo(id, name, phone, title, avatarUrl) {
    try {
        const query = `UPDATE ${tableName} SET name=?, phone=?, title=?, avatar_url=? WHERE id=?`;
        const values = [name, phone, title, avatarUrl, id];
        const result = await db_conection.query(query, values);
        return result.affectedRows > 0; // Returns true if any rows were updated
    } catch (error) {
        throw new Error(`Failed to update contact: ${error}`);
    }
}

async function deleteContactByIdRepo(id) {
    try {
        const query = `DELETE FROM ${tableName} WHERE id=?`;
        const result = await db_conection.query(query, [id]);
        return result.affectedRows > 0; // Returns true if any rows were deleted
    } catch (error) {
        throw new Error(`Failed to delete contact: ${error}`);
    }
}

module.exports = {
    getAllContactRepo,
    insertContactRepo,
    updateContactRepo,
    deleteContactByIdRepo
};



// import { db_conection } from '../db/db';

// const tableName = 'contact';

// async function getAllContactRepo() {
//     try {
//         const results = await db_conection.query(`SELECT * FROM ${tableName}`);
//         return results;
//     } catch (error) {
//         throw new Error(`Internal Server Error: ${error}`);
//     }
// }

// async function insertContactRepo(name, phone, title, avatarUrl) {
//     try {
//         const query = `INSERT INTO ${tableName} (name, phone, title, avatar_url) VALUES (?, ?, ?, ?)`;
//         const values = [name, phone, title, avatarUrl];
//         const result = await db_conection.query(query, values);
//         return result.insertId; // Return the ID of the newly inserted contact
//     } catch (error) {
//         throw new Error(`Failed to add contact: ${error}`);
//     }
// }

// async function updateContactRepo(id, name, phone, title, avatarUrl) {
//     try {
//         const query = `UPDATE ${tableName} SET name=?, phone=?, title=?, avatar_url=? WHERE id=?`;
//         const values = [name, phone, title, avatarUrl, id];
//         const result = await db_conection.query(query, values);
//         return result.affectedRows > 0; // Returns true if any rows were updated
//     } catch (error) {
//         throw new Error(`Failed to update contact: ${error}`);
//     }
// }

// async function deleteContactByIdRepo(id) {
//     try {
//         const query = `DELETE FROM ${tableName} WHERE id=?`;
//         const result = await db_conection.query(query, [id]);
//         return result.affectedRows > 0; // Returns true if any rows were deleted
//     } catch (error) {
//         throw new Error(`Failed to delete contact: ${error}`);
//     }
// }

// module.exports = {
//     getAllContactRepo,
//     insertContactRepo,
//     updateContactRepo,
//     deleteContactByIdRepo
// };






































// async function addContactRepo(name, phone, title, avatarUrl) {
//     try {
//         return await addContactDB(name, phone, title, avatarUrl)
//     }
//     catch {
//         return 'Internal Server Error';
//     }
// }

// async function updateContactRepo(id, name, phone, title, avatarUrl) {
//     try {
//         return await updateContactDB(id, name, phone, title, avatarUrl);
//     }
//     catch {
//         return 'Internal Server Error';
//     }
// }

// //http:3000/contact/id
// async function deleteContactByIdRepo(id) {
//     try {
//         return await deleteContactByIdDB(id);
//     }
//     catch {
//         return 'Internal Server Error';
//     }
// }

// module.exports =
// {
//     getAllContactRepo,
//     addContactRepo,
//     updateContactRepo,
//     deleteContactByIdRepo
// }


// const mysql = require('mysql');
// const { db_conection } = require('../db/db');

// const database = 'contactDB'

// const dbc = mysql.createPool({
//     connectionLimit: 10,
//     host: 'localhost',
//     user: 'root',
//     password: '1234',
//     database: database,
//     multipleStatements: true,
//     debug: false
// });

// const getTable = (tableName) => {
//     return new Promise((resolve, reject) => {
//         dbc.query(`select * from ${tableName}`, (err, rows) => {
//             if (err) console.log(err);
//             resolve([rows, err]);
//         });
//     });
// }

// const insert = (tableName, object) => {
//     return new Promise((resolve, reject) => {
//         dbc.query(`insert into ${tableName} set ?`, object, (err, result) => {
//             if (err) console.log(err);
//             let id = result ? result.insertId : -1
//             resolve([id, err]);
//         });
//     });
// }
// const update = (tableName, object) => {
//     return new Promise(async (resolve, reject) => {
//         const columns = Object.keys(object);
//         const values = Object.values(object);
//         let id = object.id
//         let sql = `UPDATE ${tableName} SET ` + columns.join(" = ? ,") + " = ?" + ` where id=` + id;
//         dbc.query(sql, values, (err, result) => {
//             if (err) console.log(err);
//             resolve([result, err]);
//         });
//     });
// }

// const deleted = (nameTalbe, id) => {
//     return new Promise(async (resolve, reject) => {
//         let sql = `delete from ${nameTalbe} where id=${id}`;
//         dbc.query(sql, (err, result) => {
//             if (err) console.log(err);
//             resolve([result, err]);
//         })
//     })
// }

// const getById = async (tableName, idValue) => {
//     return new Promise((resolve, reject) => {
//         dbc.query(`select * from ${tableName} where id=?`, idValue, (err, rows) => {
//             resolve([rows && rows[0] ? rows[0] : null, err]);
//         })
//     })
// }
// module.exports = {
//     getTable, insert, update, deleted, getById
// }