export default class Astronaut {
  constructor(age, planet) {
    this.age = age;
    this.planet = planet;
  }

  whereFrom () {
    let presentAge = 0;
    if (this.planet === "Earth") {
      presentAge = this.age * 1
      return parseFloat(presentAge.toFixed(2));
    } else if (this.planet === "Mercury") {
      presentAge = this.age / 0.24;
      return parseFloat(presentAge.toFixed(2));
    } else if (this.planet === "Venus") {
      presentAge = this.age / 0.62;
      return parseFloat(presentAge.toFixed(2));
    } else if (this.planet === "Mars") {
      presentAge = this.age / 1.88;
      return parseFloat(presentAge.toFixed(2));
    }
  }
}