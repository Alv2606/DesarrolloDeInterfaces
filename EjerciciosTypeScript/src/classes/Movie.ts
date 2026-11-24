import { Director } from "../models/Director.js";
import { IVideo } from "../models/IVideo.js";

export class Movie implements IVideo<string> {
    //Lo comentado es la forma antigua de hacerlo.
    //public title: string;
    //private duration: number;
    //readonly hasOscars: boolean;

    constructor(
        public title: string,
        private duration: number,
        readonly hasOscars: boolean,
        public director: Director<string>){
        //this.title = title;
        //this.duration = duration;
        //this.hasOscars = hasOscars;
    }

    getDuration(){
        return this.duration;
    }

    play(){
        console.log(`Playing ${this.title}`);
        
    }

    getInfo(){
        return `Title: ${this.title} - Duration: ${this.duration} - Has Oscars: ${this.hasOscars}`;
    }
}