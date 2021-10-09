const express = require('express');
var app = express();

const mysql = require('mysql');
var cors = require('cors');

app.use(cors());

app.get('/menu', mostrar_menus);


function mostrar_menus(req, res){

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'utec',
        password: '1234567890',
        database: 'restaurant'
    });

    connection.connect();

    var myQuery = "SELECT nombre, precio, created_date, modified_date"+
                  " FROM menu;";
    
    connection.query(myQuery, function(error,results, fields){
        res.send(results);

        connection.end();
    });
}


app.listen(3000, function(){
    console.log("puerto 3000 abierto")
})