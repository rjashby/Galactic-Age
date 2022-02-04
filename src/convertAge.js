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
    this.outlive();
    let expect = 77.8 - this.age;
    let lordNotYetImTooYoungToDie = 0;
    if (this.planet === "Earth") {
      lordNotYetImTooYoungToDie = expect / 1;
    } else if (this.planet === "Mercury") {
      lordNotYetImTooYoungToDie = expect / 0.24;
    } else if (this.planet === "Venus") {
      lordNotYetImTooYoungToDie = expect / 0.62;
    } else if (this.planet === "Mars") {
      lordNotYetImTooYoungToDie = expect / 1.88;
    } else if (this.planet === "Jupiter") {
      lordNotYetImTooYoungToDie = expect / 11.86;
    } else {
      return "Choose a Planet";
    }
    return parseFloat(lordNotYetImTooYoungToDie.toFixed(2));
  }

  outlive () {
    let expect = 77.8 - this.age;
    let lordNotYetImTooYoungToDie = 0;
    if (Math.sign(expect) === -1) {
      if (this.planet === "Earth") {
      lordNotYetImTooYoungToDie = "Congratulations! You've out-kicked your coverage age by " + (parseFloat((expect / 1) * -1).toFixed(2)) + " years!";
      return lordNotYetImTooYoungToDie;
      } else if (this.planet === "Mercury") {
        lordNotYetImTooYoungToDie = "Congratulations! You've out-kicked your coverage age by " + (parseFloat((expect / 0.24) * -1).toFixed(2)) + " years!";
        return lordNotYetImTooYoungToDie;
      } else if (this.planet === "Venus") {
        lordNotYetImTooYoungToDie = "Congratulations! You've out-kicked your coverage age by " + (parseFloat((expect / 0.62) * -1).toFixed(2)) + " years!";
        return lordNotYetImTooYoungToDie;
      } else if (this.planet === "Mars") {
        lordNotYetImTooYoungToDie = "Congratulations! You've out-kicked your coverage age by " + (parseFloat((expect / 1.88) * -1).toFixed(2)) + " years!";
        return lordNotYetImTooYoungToDie;
      }
    }
  }
}
