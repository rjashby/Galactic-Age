export default class Astronaut {
  constructor(age, planet) {
    this.age = age;
    this.planet = planet;
  }

  whereFrom () {
    let presentAge = 0;
    if (this.planet === "Earth") {
      presentAge = this.age * 1
    } 
    return presentAge;
  }

}