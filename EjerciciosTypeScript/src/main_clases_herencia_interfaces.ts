// //Interfaces

// interface Director<T> {
//     name: string;
//     age: number;
//     data: T;
// }

// const director1: Director<string> = {
//     name: "Peter Jackson",
//     age: 60,
//     data: "He is amazing"
// }

// console.log(director1);

// interface IVideo<T> {
//     title: string;
//     //No se puede porque es privado duration: number;
//     getDuration(): number;
//     play(): void;
//     director: Director<T>;
// }

// //Clases

// class Movie implements IVideo<string> {
//     //Lo comentado es la forma antigua de hacerlo.
//     //public title: string;
//     //private duration: number;
//     //readonly hasOscars: boolean;

//     constructor(
//         public title: string,
//         private duration: number,
//         readonly hasOscars: boolean,
//         public director: Director<string>){
//         //this.title = title;
//         //this.duration = duration;
//         //this.hasOscars = hasOscars;
//     }

//     getDuration(){
//         return this.duration;
//     }

//     play(){
//         console.log(`Playing ${this.title}`);
        
//     }

//     getInfo(){
//         return `Title: ${this.title} - Duration: ${this.duration} - Has Oscars: ${this.hasOscars}`;
//     }
// }

// const movie1 = new Movie("El señor de los anillos", 300, true, director1);
// const movie2 = new Movie("Harry Potter", 200, false, director1);

// console.log(movie1);
// console.log(movie2);
// console.log(movie1.getInfo());
// movie1.play();


// //movie1.title = "El Hobbit";
// //console.log(movie1.title);

// //Herencia

// class HorrorMovie extends Movie {
//     constructor(
//         title: string, 
//         duration: number, 
//         hasOscars: boolean,
//         director: Director<string>,
//         public hasJumpScares: boolean){
//             super(title, duration, hasOscars, director);
//     }

//     displayAlert(){
//         console.log("Que mieo")
//     }
// }

// const scream = new HorrorMovie("Scream", 120, true, director1, true);
// console.log(scream);
// scream.displayAlert();
// console.log(scream.getInfo());

// interface IEpisodic {
//     episodes: number;
// }

// class Series implements IVideo<string>, IEpisodic{
//     constructor(
//         public title: string,
//         private duration: number,
//         readonly hasOscars: boolean,
//         public director: Director<string>,
//         public episodes: number){
//     }
//     getDuration(): number {
//         return this.duration;
//     }
//     play(): void {
//         console.log(`Playing ${this.title}`);
//     }
// }