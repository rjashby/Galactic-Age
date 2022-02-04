export default class Astronaut {
  constructor(age, planet) {
    this.age = age;
    this.planet = planet;
  }

  whereFrom () {
    let presentAge = 0;
    if (this.planet === "Earth") {
      presentAge = this.age * 1
    } else if (this.planet === "Mercury") {
      presentAge = this.age / 0.24;
    } else if (this.planet === "Venus") {
      presentAge = this.age / 0.62;
    } else if (this.planet === "Mars") {
      presentAge = this.age / 1.88;
    } else if (this.planet === "Jupiter") {
      presentAge = this.age / 11.86;
    } else {
      return "Choose a Planet";
    }
    return parseFloat(presentAge.toFixed(2));
  }

  howMuchLeft () {
    let expect = 77.8;
    let lordNotYetImTooYoungToDie = 0;
    if (this.planet === "Earth") {
      lordNotYetImTooYoungToDie = (expect - this.age) / 1;
      return parseFloat(lordNotYetImTooYoungToDie.toFixed(2));
    } else if (this.planet === "Mercury") {
      lordNotYetImTooYoungToDie = (expect - this.age) / 0.24;
      return parseFloat(lordNotYetImTooYoungToDie.toFixed(2));
    } else if (this.planet === "Venus") {
      lordNotYetImTooYoungToDie = (expect - this.age) / 0.62;
      return parseFloat(lordNotYetImTooYoungToDie.toFixed(2));
    } else if (this.planet === "Mars") {
      lordNotYetImTooYoungToDie = (expect - this.age) / 1.88;
      return parseFloat(lordNotYetImTooYoungToDie.toFixed(2));
    }
  }
}
