import { TestWatcher } from "jest";
import Astronaut from "../src/convertAge";

describe("Astronaut", () => {

  test("should create a basic 'Astronaut' object with properties of age and planet", () => {
    const astronaut = new Astronaut(34, "Earth"); 
    expect(astronaut.age).toEqual(34);
    expect(astronaut.planet).toEqual("Earth");
  });
})