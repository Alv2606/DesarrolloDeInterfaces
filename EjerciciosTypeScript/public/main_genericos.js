"use strict";
//Genericos:
// function getFirstElement(array:number[]){
//     return array[0];
// }
//T es un tipo de dato generico, se suele escribir la letra
function getFirstElement(array) {
    return array[0];
}
const numArr = [10, 20, 30];
const firstNum = getFirstElement(numArr);
console.log(firstNum);
const strArr = ["a", "b", "c"];
const firstStr = getFirstElement(strArr); //Podemos definir el tipo del array cuando lo invocamos
console.log(firstStr);
const username2 = document.querySelector("#username");
console.log(username2?.placeholder);
