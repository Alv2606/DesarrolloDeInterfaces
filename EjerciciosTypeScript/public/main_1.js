"use strict";
//Tipos de datos:
Object.defineProperty(exports, "__esModule", { value: true });
//Para declarar que tipo tiene la variable con ":"
let movie = "El Señor de los Anillos";
let duration = 223;
let hasOscars = true;
movie = "La Comunidad del Anillo";
//Esto no se puede hacer: movie = 1234;
duration = 240;
//No se puede: duration = "4 horas"
hasOscars = false;
//No se puede: hasOscars = 1234;
let myObject = {
    product: "Computer",
    price: 1234,
};
myObject = {
    patata: true,
};
//Le tenemos que decir de que tipo de array se trata.
let myArray;
myArray = [1, 2, 3];
let data = 9999;
data = "Ahora es un String";
data = false;
data = {};
data = [];
data = null;
