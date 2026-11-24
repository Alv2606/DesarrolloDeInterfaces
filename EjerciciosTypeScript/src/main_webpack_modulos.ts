//Webpack

//npm init
//npm install webpack webpack-cli ts-loader typescript -D

//Testing with jest
//npm i jest babel-jest @babel/core @babel/preset-env @babel/preset-typescript @types/jest -D

import { Movie } from "./classes/Movie";
import { Director } from "./models/Director";
import { HorrorMovie } from "./classes/HorrorMovie";

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

    h3.classList.add("title");
    h3.textContent = movie.title;

    h4.classList.add("duration");
    h4.textContent = `${movie.getDuration()} min`;

    p.textContent = `Director: ${movie.director.name}`;

    li.classList.add("movie-card");
    li.append(h3);
    li.append(h4);
    li.append(p);

    movieList.append(li);
}

let movieShown = false;

btn.addEventListener("click", () => {
    if(movieShown){
        movieList.innerHTML = "";
        btn.textContent = "Show Movies";
    } else {
        movieArr.forEach(movie => addMovie(movie));
        btn.textContent = "Hide Movies";
    }
    movieShown = !movieShown;
})