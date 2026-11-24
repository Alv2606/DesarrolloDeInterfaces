import { Director } from "../models/Director.js";
import { IEpisodic } from "../models/IEpisodic.js";
import { IVideo } from "../models/IVideo.js";

export class Series implements IVideo<string>, IEpisodic{
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