import { Director } from "../models/Director";
import { IEpisodic } from "../models/IEpisodic";
import { IVideo } from "../models/IVideo";

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