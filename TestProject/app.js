const express = require('express');
const app = express();
const port = 3030;

// Add mysql2 package
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost', // Change if using a remote server
    user: 'root',
    password: '',
    database: 'Gard'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to MySQL database!');
});

// Query Example
connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    console.log(results);
});

// Close the connection
connection.end();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

