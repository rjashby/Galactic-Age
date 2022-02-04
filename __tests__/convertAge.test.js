import { TestWatcher } from "jest";
import Astronaut from "../src/convertAge";

describe("Astronaut", () => {

  test("should create a basic 'Astronaut' object with properties of age and planet", () => {
    const astronaut = new Astronaut(34, "Earth"); 
    expect(astronaut.age).toEqual(34);
    expect(astronaut.planet).toEqual("Earth");
  });

  test("should create a prototype method for determining a user's age based on the value 'Earth' for the planet property", () => {
    const astronaut = new Astronaut(34, "Earth"); 
    expect(astronaut.planet).toEqual("Earth");
    expect(astronaut.whereFrom()).toEqual(34);
  });

  test("should create a prototype method for determining a user's age based on the value 'Mercury' for the planet property", () => {
    const astronaut = new Astronaut(34, "Mercury"); 
    expect(astronaut.planet).toEqual("Mercury");
    expect(astronaut.whereFrom()).toEqual(141.66);
  });
})