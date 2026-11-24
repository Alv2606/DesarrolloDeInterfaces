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

const scream = new HorrorMovie("Scream", 120, true, director1, true);

const movieArr: Movie[] = [movie1, movie2, scream];

const btn = document.querySelector(".btn") as HTMLButtonElement;
const movieList = document.querySelector(".movie-list") as HTMLUListElement;

const addMovie = (movie: Movie) => {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
}