create database restaurant;
use restaurant;

create table menu(
    nombre varchar(255),
    precio int,
    created_date datetime,
    modified_date datetime
);

INSERT INTO menu(nombre, precio, created_date, modified_date)
VALUES ('ceviche',15,NOW(),NOW());

INSERT INTO menu(nombre, precio, created_date, modified_date)
VALUES ('arroz con pollo',10,NOW(),NOW());

INSERT INTO menu(nombre, precio, created_date, modified_date)
VALUES ('aji de gallina',13,NOW(),NOW());


/*prueba: */
SELECT  nombre, precio, created_date, modified_date
FROM menu;
