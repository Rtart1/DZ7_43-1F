class Cars {
  constructor(options) {
    this.model = options.model;
    this.color = options.color;
    this.wheels = options.wheels;
  }

  start() {
    console.log("Машина заведена");
  }
}

class SportsCar extends Cars {
  constructor(options) {
    super(options);
    this.maxSpeed = options.maxSpeed;
  }

  speed() {
    console.log(
      `Максимальная скорость Lamborghini Aventador : ${this.maxSpeed} км/ч`
    );
  }
}

class OffRoadCars extends Cars {
  constructor(options) {
    super(options);
    this.offroad = options.offroad;
  }

  driveOffroad() {
    console.log(
      `По бездорожью проходимость Ford F150 raptor : ${this.offroad}`
    );
  }
}

class Сrossover extends Cars {
  constructor(options) {
    super(options);
    this.fuelConsumption = options.fuelConsumption;
  }

  consumptionFuel() {
    console.log(
      `Расход топлива кроссовера Hyundai Creta : ${this.fuelConsumption} литров`
    );
  }
}

const sportsCar = new SportsCar({
  model: "Lamborghini Aventador 6.5",
  color: "yellow",
  wheels: 4,
  maxSpeed: 350,
});

const оffRoadCars = new OffRoadCars({
  model: "Ford F150 raptor",
  color: "light blue",
  wheels: 4,
  offroad: "очень высокая !",
});

const сrossover = new Сrossover({
  model: "Hyundai Creta",
  color: "white",
  wheels: 4,
  fuelConsumption: 15,
});

sportsCar.start();
sportsCar.speed();

оffRoadCars.start();
оffRoadCars.driveOffroad();

сrossover.start();
сrossover.consumptionFuel();

console.log(sportsCar);
console.log(оffRoadCars);
console.log(сrossover);
