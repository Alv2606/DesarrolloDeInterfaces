//Webpack

//npm init
//npm install webpack webpack-cli ts-loader typescript -D

import { Movie } from "./classes/Movie";
import { Director } from "./models/Director";
import { IEpisodic } from "./models/IEpisodic";
import { IVideo } from "./models/IVideo";
import { HorrorMovie } from "./classes/HorrorMovie";
import { Series } from "./classes/Series";

const director1: Director<string> = {
    name: "Peter Jackson",
    age: 60,
    data: "He is amazing"
}

console.log(director1);

const movie1 = new Movie("El señor de los anillos", 300, true, director1);
const movie2 = new Movie("Harry Potter", 200, false, director1);

console.log(movie1);
console.log(movie2);
console.log(movie1.getInfo());
movie1.play();

const scream = new HorrorMovie("Scream", 120, true, director1, true);
console.log(scream);
scream.displayAlert();
console.log(scream.getInfo());