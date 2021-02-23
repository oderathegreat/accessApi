const express = require("express");
const sql = require('mssql');

const app = express();

app.listen(4000);







//Establish a database connection
const db = sql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'admin2020',
    database: 'accessdb'


//     APP_PORT = 3000
// DB_PORT = 3306
// DB_HOST = localhost
// DB_USER = root
// DB_PASS =admin2020
// MYSQL_DB =accessdb

});


db.connect(function(err) {
    if (err) {
      
        throw err;
    }

    console.log('MYSQL connection is established');
   
    //console.log('connected as id ' + connection.threadId);
  });

app.get('/services', (req, res) =>{
res.json({
success: 1,
message: "API is working"
    });
});

//get records in the database
app.get('/records', (req, res) =>{

let sql = 'SELECT * FROM events ';

let query = db.query(sql, (err, results ) =>{

if(err) throw err;
console.log(results);
res.send('Posts fetched');

});
    
    });
    

