const express = require('express');
const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const insertQuery = `INSERT INTO people (name) VALUES ('Edilson');`;
const selectQuery = 'SELECT * FROM people';
connection.query(insertQuery);
// connection.end();

app.get('/', (req, res) => {
    connection.query(selectQuery, function (err, result, fields) {
        if (err) {
            console.log(err)
            return res.status(409).json({error: 'error to find people'});
        }
        
        let names = result.map(people => people.name).join('<br/>');
        return res.send(`<h1>Full Cycle</h1><br/>${names}`);
      });
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
