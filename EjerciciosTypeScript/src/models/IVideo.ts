import { Director } from "./Director.js";

export interface IVideo<T> {
    title: string;
    //No se puede porque es privado duration: number;
    getDuration(): number;
    play(): void;
    director: Director<T>;
}