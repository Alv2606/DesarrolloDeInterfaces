//Webpack

//npm init
//npm install webpack webpack-cli ts-loader typescript -D

import { Movie } from "./classes/Movie.js";
import { Director } from "./models/Director.js";
import { IEpisodic } from "./models/IEpisodic.js";
import { IVideo } from "./models/IVideo.js";
import { HorrorMovie } from "./classes/HorrorMovie.js";
import { Series } from "./classes/Series.js";

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