const express = require('express');
var app = express();
app.get('/dihola', helloWorld);

function helloWorld(req, res){
    res.send("hola mundo");
}

const mysql = require('mysql');

app.get('/muestra_datos', mostrar_menus);

function mostrar_menus(req, res){
    //defino la conexion con la base de datos
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'juanjlb',
        password: 'hajime27',
        database: 'restaurant'
    });

    //establesco la conexion
    connection.connect();

    var myQuery = "SELECT plato_id, nombre, precio, created_date, modified_date"+
                  " FROM menu;";
    
    connection.query(myQuery, function(error,results, fields){
        res.send(results);

        connection.end();
    });
}

//SELECT plato_id, nombre, precio, created_date, modified_date
//FROM menu;

app.listen(3000, function(){
    console.log("puerto 3000 abierto")
})