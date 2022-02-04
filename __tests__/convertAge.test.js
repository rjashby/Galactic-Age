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

  test("should build upon the prototype method for determining a user's age based on the value 'Mercury' for the planet property", () => {
    const astronaut = new Astronaut(34, "Mercury"); 
    expect(astronaut.planet).toEqual("Mercury");
    expect(astronaut.whereFrom()).toEqual(141.67);
  });

  test("should build upon the prototype method for determining a user's age based on the value 'Venus' for the planet property", () => {
    const astronaut = new Astronaut(34, "Venus"); 
    expect(astronaut.planet).toEqual("Venus");
    expect(astronaut.whereFrom()).toEqual(54.84);
  });

  test("should build upon the prototype method for determining a user's age based on the value 'Mars' for the planet property", () => {
    const astronaut = new Astronaut(34, "Mars"); 
    expect(astronaut.planet).toEqual("Mars");
    expect(astronaut.whereFrom()).toEqual(18.09);
  });

  test("should build upon the prototype method for determining a user's age based on the value 'Jupiter' for the planet property", () => {
    const astronaut = new Astronaut(34, "Jupiter"); 
    expect(astronaut.planet).toEqual("Jupiter");
    expect(astronaut.whereFrom()).toEqual(2.87);
  });

  test("should create a prototype method for determining a user's remaining life expectancy based upon the most recent CDC vital statistics and the value 'Earth' for the planet property", () => {
    const astronaut = new Astronaut(34, "Earth"); 
    expect(astronaut.planet).toEqual("Earth");
    expect(astronaut.howMuchLeft()).toEqual(43.8);
  });
})
