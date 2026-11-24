import { Movie } from "./classes/Movie.js";
import { HorrorMovie } from "./classes/HorrorMovie.js";
const director1 = {
    name: "Peter Jackson",
    age: 60,
    data: "He is amazing"
};
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
