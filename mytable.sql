create database restaurant;
use restaurant;

create table menu(
    plato_id int NOT NULL,
    nombre varchar(255),
    precio int,
    created_date datetime,
    modified_date datetime,
    PRIMARY KEY(plato_id)
);

INSERT INTO menu(plato_id, nombre, precio, created_date, modified_date)
VALUES (1,'ceviche',15,NOW(),NOW());

INSERT INTO menu(plato_id, nombre, precio, created_date, modified_date)
VALUES (2,'arroz con pollo',10,NOW(),NOW());

INSERT INTO menu(plato_id, nombre, precio, created_date, modified_date)
VALUES (3,'aji de gallina',13,NOW(),NOW());


/*prueba: */
SELECT plato_id, nombre, precio, created_date, modified_date
FROM menu;
