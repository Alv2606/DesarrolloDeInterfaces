import { Director } from "../models/Director";
import { Movie } from "./Movie";

describe("Movie tests", () => {
  const director: Director<string> = {
    name: "Stanley Kubrick",
    age: 70,
    data: "Great Director"
  }

  const movie = new Movie("La Naranja Mecánica", 100, true, director);

  it("title should be La Naranja Mecánica", () => {
    expect(movie.title).toBe("La Naranja Mecánica");
  })

  it("Duration should be 100", () => {
    expect(movie.getDuration()).toBe(100);
  })

  it("Should get 1 hour and 40 minutes", () => {
    expect(movie.getHoursMinutes()).toBe("1h 40m");
  })
})