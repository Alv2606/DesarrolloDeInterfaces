import { Movie } from "../classes/Movie.js";
export class HorrorMovie extends Movie {
    hasJumpScares;
    constructor(title, duration, hasOscars, director, hasJumpScares) {
        super(title, duration, hasOscars, director);
        this.hasJumpScares = hasJumpScares;
    }
    displayAlert() {
        console.log("Que mieo");
    }
}
