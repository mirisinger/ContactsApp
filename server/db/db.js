const mysql = require('mysql');

const database = 'contact_db';

const db_conection = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    password: 'ZM1234One1',
    database: database,
    multipleStatements: true,
    debug: false
});

//Checks the connection to the database
db_conection.getConnection(function(err, connection) {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database successfully');
    connection.release(); //to release the connection
});

module.exports = {
    db_conection
};
