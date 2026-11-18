import { Movie } from "./classes/Movie";
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
class HorrorMovie extends Movie {
    hasJumpScares;
    constructor(title, duration, hasOscars, director, hasJumpScares) {
        super(title, duration, hasOscars, director);
        this.hasJumpScares = hasJumpScares;
    }
    displayAlert() {
        console.log("Que mieo");
    }
}
const scream = new HorrorMovie("Scream", 120, true, director1, true);
console.log(scream);
scream.displayAlert();
console.log(scream.getInfo());
class Series {
    title;
    duration;
    hasOscars;
    director;
    episodes;
    constructor(title, duration, hasOscars, director, episodes) {
        this.title = title;
        this.duration = duration;
        this.hasOscars = hasOscars;
        this.director = director;
        this.episodes = episodes;
    }
    getDuration() {
        return this.duration;
    }
    play() {
        console.log(`Playing ${this.title}`);
    }
}
