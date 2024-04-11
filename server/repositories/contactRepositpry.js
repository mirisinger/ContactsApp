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
        const query = `INSERT INTO ${tableName} (name, phone, title, avatarUrl) VALUES (?, ?, ?, ?)`;
        const values = [name, phone, title, avatarUrl];
        const result = await db_conection.query(query, values);
        return result.insertId; // Return the ID of the newly inserted contact
    } catch (error) {
        throw new Error(`Failed to add contact: ${error}`);
    }
}

async function updateContactRepo(id, name, phone, title, avatarUrl) {
    try {
        const query = `UPDATE ${tableName} SET name=?, phone=?, title=?, avatarUrl=? WHERE id=?`;
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
