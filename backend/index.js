const express = require('express');
var app = express();

const mysql = require('mysql');


app.get('/a',say_a);

function say_a(req,res){
    res.send("a");
}

app.get('/menu', mostrar_menus);


function mostrar_menus(req, res){
    //defino la conexion con la base de datos
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'utec',
        password: '1234567890',
        database: 'restaurant'
    });

    //establesco la conexion
    connection.connect();

    var myQuery = "SELECT nombre, precio, created_date, modified_date"+
                  " FROM menu;";
    
    connection.query(myQuery, function(error,results, fields){
        res.send(results);

        connection.end();
    });
}

//SELECT  nombre, precio, created_date, modified_date
//FROM menu;

app.listen(3000, function(){
    console.log("puerto 3000 abierto")
})