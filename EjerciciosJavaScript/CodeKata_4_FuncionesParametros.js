/*function getCopyright(name, year){
    let copyright = name + " - " + year;
    return copyright;
}

let result = getCopyright("Álvaro", 2026);
console.log(result);*/

/*function getCopyright(name, year = 2026){
    let copyright = name + " - " + year;
    return copyright;
}

let result = getCopyright("Álvaro");
console.log(result);*/

/*let result = function (name, year, formatter){
    let copyright = formatter(name, year);
    return copyright;
}

let formatter = function(name, year){
    return name + " | " + year;
}

console.log(result("Álvaro", 2026, formatter));*/

(function(name, year){
    console.log(name, year);
})("Álvaro", 2026);