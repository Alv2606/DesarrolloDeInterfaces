export class Series {
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
