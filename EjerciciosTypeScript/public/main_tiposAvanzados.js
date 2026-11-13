"use strict";
//Tipos de datos avanzados:
//Union:
let myId = 1234;
myId = 678;
myId = "asd";
let userId = 123;
userId = "asd";
let myArr = [10, 20, 30];
//No admite otros tipos de los que le hemos asignado, igual que antes
myArr = [40, 50, "str1", "str2", true, false];
//A esta variable no se le puede asignar ningún valor
let loading = "Loading";
let error = "Error";
let state = "Loading";
//No acepta nada mas de lo que hemos declarado en el type
const eldla = {
    title: "El señor de los anillos",
    duration: 180,
    hasOscars: true
};
const harryPotter = {
    title: "Harry Potter",
    pages: 300,
    duration: 120,
    hasOscars: false
};
//Esto nunca puede existir
//type numStr = number & string;
//let a: numStr = "a";
