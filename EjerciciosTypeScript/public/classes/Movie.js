export class Movie {
    title;
    duration;
    hasOscars;
    director;
    //Lo comentado es la forma antigua de hacerlo.
    //public title: string;
    //private duration: number;
    //readonly hasOscars: boolean;
    constructor(title, duration, hasOscars, director) {
        this.title = title;
        this.duration = duration;
        this.hasOscars = hasOscars;
        this.director = director;
        //this.title = title;
        //this.duration = duration;
        //this.hasOscars = hasOscars;
    }
    getDuration() {
        return this.duration;
    }
    play() {
        console.log(`Playing ${this.title}`);
    }
    getInfo() {
        return `Title: ${this.title} - Duration: ${this.duration} - Has Oscars: ${this.hasOscars}`;
    }
}
