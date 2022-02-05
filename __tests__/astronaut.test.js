import { TestWatcher } from "jest";
import Astronaut from "../src/astronaut";

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

  test("should return 'Choose a Planet' if no value selected for planet", () => {
    const astronaut = new Astronaut(34, ""); 
    expect(astronaut.planet).toEqual("");
    expect(astronaut.whereFrom()).toEqual("Choose a Planet");
  });

  test("should create a prototype method for determining a user's remaining life expectancy based upon the most recent CDC vital statistics and the value 'Earth' for the planet property", () => {
    const astronaut = new Astronaut(34, "Earth"); 
    expect(astronaut.planet).toEqual("Earth");
    expect(astronaut.howMuchLeft()).toEqual(43.8);
  });

  test("should build upon the prototype method for determining a user's life expectancy based on the value 'Mercury' for the planet property", () => {
    const astronaut = new Astronaut(34, "Mercury"); 
    expect(astronaut.planet).toEqual("Mercury");
    expect(astronaut.howMuchLeft()).toEqual(182.5);
  });

  test("should build upon the prototype method for determining a user's life expectancy based on the value 'Venus' for the planet property", () => {
    const astronaut = new Astronaut(34, "Venus"); 
    expect(astronaut.planet).toEqual("Venus");
    expect(astronaut.howMuchLeft()).toEqual(70.65);
  });

  test("should build upon the prototype method for determining a user's life expectancy based on the value 'Mars' for the planet property", () => {
    const astronaut = new Astronaut(34, "Mars"); 
    expect(astronaut.planet).toEqual("Mars");
    expect(astronaut.howMuchLeft()).toEqual(23.30);
  });

  test("should build upon the prototype method for determining a user's life expectancy based on the value 'Jupiter' for the planet property", () => {
    const astronaut = new Astronaut(34, "Jupiter"); 
    expect(astronaut.planet).toEqual("Jupiter");
    expect(astronaut.howMuchLeft()).toEqual(3.69);
  });

  test("should return 'Choose a Planet' if no value selected for planet", () => {
    const astronaut = new Astronaut(34, ""); 
    expect(astronaut.planet).toEqual("");
    expect(astronaut.howMuchLeft()).toEqual("Choose a Planet");
  });

  test("should create an 'outlive' method that returns the message 'Congratulations! You've out-kicked your coverage age by' plus a positive number of years if a user has outlived their life expectancy", () => {
    const astronaut = new Astronaut(83, "Earth"); 
    expect(astronaut.planet).toEqual("Earth");
    expect(astronaut.outlive()).toEqual("Congratulations! You've out-kicked your coverage age by 5.20 years!");
  });

  test("should update 'outlive' method based on Mercury", () => {
    const astronaut = new Astronaut(83, "Mercury"); 
    expect(astronaut.planet).toEqual("Mercury");
    expect(astronaut.outlive()).toEqual("Congratulations! You've out-kicked your coverage age by 21.67 years!");
  });

  test("should update 'outlive' method based on Venus", () => {
    const astronaut = new Astronaut(83, "Venus"); 
    expect(astronaut.planet).toEqual("Venus");
    expect(astronaut.outlive()).toEqual("Congratulations! You've out-kicked your coverage age by 8.39 years!");
  });

  test("should update 'outlive' method based on Mars", () => {
    const astronaut = new Astronaut(83, "Mars"); 
    expect(astronaut.planet).toEqual("Mars");
    expect(astronaut.outlive()).toEqual("Congratulations! You've out-kicked your coverage age by 2.77 years!");
  });

  test("should update 'outlive' method based on Jupiter", () => {
    const astronaut = new Astronaut(83, "Jupiter"); 
    expect(astronaut.planet).toEqual("Jupiter");
    expect(astronaut.outlive()).toEqual("Congratulations! You've out-kicked your coverage age by 0.44 years!");
  });

  test("should return 'Choose a Planet' if no value selected for planet", () => {
    const astronaut = new Astronaut(83, ""); 
    expect(astronaut.planet).toEqual("");
    expect(astronaut.outlive()).toEqual("Choose a Planet");
  });
})
