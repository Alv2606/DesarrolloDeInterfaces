
function printName(){
    let name = "Alvaro";
    console.log(name);
    let surname = "Sierra";

    if(name === "Alvaro"){

        console.log(surname);
    }
}

printName();

//Si se hace al revés y se referencia a una variable desde un hijo a un padre da error.

let name = "Alvaro";

if(true){
    let text = "texto";
}

console.log(text);