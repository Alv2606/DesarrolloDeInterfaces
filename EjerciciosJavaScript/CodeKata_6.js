let year = false;

//== iguala sin importar el tipo, === iguala teniendo en cuenta los tipos
if(year === "2026"){
    console.log("Son iguales");
}

if(year !== "2026"){
    console.log("Son distintos por diferente tipo");
}

if(year > 2023){
    console.log("Es mayor");
}

if(year <= 2026){
    console.log("Es menor o igual")
}

if(year > 2021 && year <= 2026){
    console.log("Ok")
}

if(year >= 2021 || year == false){
    console.log("Correcto")
}

if(!year){
    console.log("Year es falso")
}