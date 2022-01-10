const mysql = require('mysql');

function prepareDB() {
    const config = {
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'nodedb'
    }
 
    const connection = mysql.createConnection(config);

    const createTableQuery = `CREATE TABLE IF NOT EXISTS people (id integer not null auto_increment, name varchar(255), primary key(id))`;

    connection.query(createTableQuery);
}

exports.prepareDB = prepareDB;
