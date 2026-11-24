import { Movie } from "../classes/Movie.js"
import { Director } from "../models/Director.js";

export class HorrorMovie extends Movie {
    constructor(
        title: string, 
        duration: number, 
        hasOscars: boolean,
        director: Director<string>,
        public hasJumpScares: boolean){
            super(title, duration, hasOscars, director);
    }

    displayAlert(){
        console.log("Que mieo")
    }
}