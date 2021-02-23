var express = require('express');


var app = express();


app.get('/', function (req, res) {


    var sql = require("mssql");


    // config for your database


    var config = {


        user: 'test123',


        password: 'test',


        server: 'localhost',


        database: 'node_db'


    };


    // connect to your database


    sql.connect(config, function (err) {


        if (err) console.log(err);


        // create Request object


        var request = new sql.Request();


        // query to the database and get the records


        request.query('select distinct * from tblstudent',


 function (err, recordset) {


            if (err) console.log(err)


            // send records as a response


            res.send(recordset);


        });


    });


    sql.close();


});


var server = app.listen(5000, function () {


    console.log('Server is running..');


});
