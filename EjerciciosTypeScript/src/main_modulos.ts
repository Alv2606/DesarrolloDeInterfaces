import { Movie } from "./classes/Movie";
import { Director } from "./models/Director";
import { IEpisodic } from "./models/Episodic";
import { IVideo } from "./models/IVideo";

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

class HorrorMovie extends Movie {
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

const scream = new HorrorMovie("Scream", 120, true, director1, true);
console.log(scream);
scream.displayAlert();
console.log(scream.getInfo());

class Series implements IVideo<string>, IEpisodic{
    constructor(
        public title: string,
        private duration: number,
        readonly hasOscars: boolean,
        public director: Director<string>,
        public episodes: number){
    }
    getDuration(): number {
        return this.duration;
    }
    play(): void {
        console.log(`Playing ${this.title}`);
    }
}