//Tipos de datos avanzados:
//Union:
let myId: number | string = 1234;
myId = 678;
myId = "asd";
//myId = true; No lo acepta porque no es ninguno de los tipos que hemos asignado

type id = number | string;

let userId:id = 123;
userId = "asd";

let myArr: (number | string | boolean)[] = [10, 20, 30];
//No admite otros tipos de los que le hemos asignado, igual que antes
myArr = [40, 50, "str1", "str2", true, false];

//Literal: un dato que tiene un valor concreto
type stateLoading = "Loading";
type stateError = "Error";

//A esta variable no se le puede asignar ningún valor
let loading: stateLoading = "Loading";
let error: stateError = "Error";

type state = stateLoading | stateError;

let state: state = "Loading";

type movie = {
    title: string;
    duration: number;
    hasOscars: boolean;
}

//No acepta nada mas de lo que hemos declarado en el type
const eldla: movie = {
    title: "El señor de los anillos",
    duration: 180,
    hasOscars: true
}

//Intersection:

type book = {
    title: string;
    pages: number;
}

type bookAdaptation = movie & book;

const harryPotter: bookAdaptation = {
    title: "Harry Potter",
    pages: 300,
    duration: 120,
    hasOscars: false
}

//Esto nunca puede existir
//type numStr = number & string;
//let a: numStr = "a";