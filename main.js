function Cars(car, type) {
  this.car = car;
  this.type = type;
  console.log(`The ${car} has been registered with the type ${type}.`);
}
const carsList = [];

function registerCars(car, type, year, hp) {
  Cars.call(this, car, type);

  let _hp = hp;

  return {
    car: car,
    type: type,
    year: year,
    getHp: function () {
      return _hp;
    },
    setHp: function (newHP) {
      _hp = newHP;
    },
  };
}
function hpValidator(hp, hpMin, car) {
  function isNumber(hp) {
    return typeof hp === "number";
  }

  if (!isNumber(hp)) {
    console.log(
      `${car}'s HP is not sufficient to enter the list. The minimum required is ${hpMin} HP.`
    );

    return false;
  }
  if (hp < hpMin) {
    console.log(
      `${car}'s HP is not enough to enter the list. Minimum required is ${hpMin} HP.`
    );
    return false;
  }
  return true;
}
function Muscle(car, year, hp) {
  const hpMin = 120;
  if (hpValidator(hp, hpMin, car)) {
    const addCar = registerCars.call(this, car, "Muscle", year, hp);
    carsList.push(addCar);
  }
}

function Sport(car, year, hp) {
  const hpMin = 400;
  if (hpValidator(hp, hpMin, car)) {
    const addCar = registerCars.call(this, car, "Sport", year, hp);
    carsList.push(addCar);
  }
}
function SUV(car, year, hp) {
  const hpMin = 200;
  if (hpValidator(hp, hpMin, car)) {
    const addCar = registerCars.call(this, car, "SUV", year, hp);
    carsList.push(addCar);
  }
}

const car1 = new Muscle("GM Vectra", 1995, 116);
const car2 = new Muscle("Ford Maverick", 1972, 140);
const car3 = new Muscle("Chevrolet Opala", 1969, 350);
const car4 = new SUV("Range Rover", 2020, 250);
const car5 = new SUV("Chevrolet Tahoe", 2021, 355);
const car6 = new SUV("BMW X5", 2023, 300);
const car7 = new Sport("Porsche 911", 2022, 450);
const car8 = new Sport("Ferrari 488", 2021, 670);
const car9 = new Sport("Lamborghini Huracán", 2021, 630);

console.log(carsList);
