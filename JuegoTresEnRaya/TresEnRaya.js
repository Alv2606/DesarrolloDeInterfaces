// variables generales
let juegoTerminado = false;
let jugadas = 0;
let jugadorO = {
    nombre : "jugador1",
    simbolo : "O"
};

let jugadorX= {
    nombre : "jugador2",
    simbolo : "X"
};

let turno = 1; 
let jugador = obtenerJugador();

const nombresPosiciones = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
let tablero = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
let existe = false;
let correcto = false;
let indice = -1;

const readline = require("readline");
const rl = readline.createInterface({input:process.stdin, output:process.stdout});

while (juegoTerminado == false){

//Ejemplo para cuando se vaya a usar

console.log("Turno de: " + jugador.nombre);
console.log("Símbolo de: " + jugador.simbolo);

mostrarTablero(tablero);
rl.question("Introduce una posicion: ", function(posicion){
    comprobarPosicion(nombresPosiciones, tablero, posicion, jugador);
    mostrarTablero(tablero);
    rl.close();
});

cambiarTurno();
jugador = obtenerJugador();
jugadas++;

comprobarGanadores();
}

// funciones

function comprobarPosicion(nombresPosiciones, tablero, posicion, jugador){
    for (let i = 0; i < nombresPosiciones.length; i++) {
        if(posicion !== nombresPosiciones[i]){
            correcto = false;
        } else {
            correcto = true;
            indice = i;
            break;
        }
    }

    if (tablero[indice] !== "-") {
        existe = true;
    }

    if(!correcto){
        console.log("La posición introducida no es válida.");
    } else {
        if(existe){
            console.log("La posición introducida ya se ha elegido.");
        } else {
            if(jugador === "jugadorX"){
                tablero[indice] = "X";
            } else {
                tablero[indice] = "O";
            }
            
        }
    }
}


function obtenerJugador() {

    if (turno == 1) {
        return jugadorO;
    }else{
        return jugadorX ;
    }
}

function cambiarTurno() {
    
    if(turno == 1){
        
        turno = 2;

    }else{
        turno = 1;
    }

}

function mostrarTablero(tablero){
    for (let i=0;i<9;i+=3){
        console.log (`${tablero[i]} ${tablero[i+1]} ${tablero[i+2]}`)
    }
}

mostrarTablero(tablero);

function comprobarGanadores(){
    // horizontales
    if (tablero[0] && tablero[1] && tablero [2] == "X") {juegoTerminado = true; print("El Jugador X ha ganado")}
    if (tablero[0] && tablero[1] && tablero [2] == "O") {juegoTerminado = true; print("El Jugador O ha ganado")}
    if (tablero[3] && tablero[4] && tablero [5] == "X") {juegoTerminado = true; print("El Jugador X ha ganado")}
    if (tablero[3] && tablero[4] && tablero [5] == "O") {juegoTerminado = true; print("El Jugador O ha ganado")}
    if (tablero[6] && tablero[7] && tablero [8] == "X") {juegoTerminado = true; print("El Jugador X ha ganado")}
    if (tablero[6] && tablero[7] && tablero [8] == "O") {juegoTerminado = true; print("El Jugad[r]O ha ganado")}
    // verticales
    if (tablero[0] && tablero[3] && tablero [6] == "X") {juegoTerminado = true; print("El Jugador X ha ganado")}
    if (tablero[0] && tablero[3] && tablero [6] == "O") {juegoTerminado = true; print("El Jugador O ha ganado")}
    if (tablero[1] && tablero[4] && tablero [7] == "X") {juegoTerminado = true; print("El Jugador X ha ganado")}
    if (tablero[1] && tablero[4] && tablero [7] == "O") {juegoTerminado = true; print("El Jugador O ha ganado")}
    if (tablero[2] && tablero[5] && tablero [8] == "X") {juegoTerminado = true; print("El Jugador X ha ganado")}
    if (tablero[2] && tablero[5] && tablero [8] == "O") {juegoTerminado = true; print("El Jugador O ha ganado")}

    // diagonales
    if (tablero[0] && tablero[4] && tablero [8] == "X") {juegoTerminado = true; print("El Jugador X ha ganado")}
    if (tablero[0] && tablero[4] && tablero [8] == "O") {juegoTerminado = true; print("El Jugador O ha ganado")}
    if (tablero[2] && tablero[4] && tablero [6] == "X") {juegoTerminado = true; print("El Jugador X ha ganado")}
    if (tablero[2] && tablero[4] && tablero [6] == "O") {juegoTerminado = true; print("El Jugador O ha ganado")}

    // empate
    if (jugadas >=8) {juegoTerminado = true; console.log("¡Empate! Nadie ha ganado")}
}