//Tipos de datos:

//Para declarar que tipo tiene la variable con ":"
let movie: String = "El Señor de los Anillos";
let duration: number = 223;
let hasOscars: boolean = true;


movie = "La Comunidad del Anillo";
//Esto no se puede hacer: movie = 1234;

duration = 240;
//No se puede: duration = "4 horas"

hasOscars = false;
//No se puede: hasOscars = 1234;

let myObject: object = {
    product: "Computer",
    price: 1234,
}

myObject = {
    patata: true,
}

//Le tenemos que decir de que tipo de array se trata.
let myArray: number[];
myArray = [1, 2, 3];

let data: any = 9999;
data = "Ahora es un String";
data = false;
data = {};
data = [];
data = null;