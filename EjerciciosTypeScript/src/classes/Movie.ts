import { Director } from "../models/Director";
import { IVideo } from "../models/IVideo";

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

    getHoursMinutes(): string {
        const mins = this.duration % 60;
        const hours = (this.duration - mins) / 60;

        return `${hours}h ${mins}m`;
    }

    play(){
        console.log(`Playing ${this.title}`);
        
    }

    getInfo(){
        return `Title: ${this.title} - Duration: ${this.duration} - Has Oscars: ${this.hasOscars}`;
    }
}