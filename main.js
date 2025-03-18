function Candidate(name, car) {
  this.name = name;
  this.car = car;
  console.log(`The candidate ${name} has been registered with the car ${car}.`);
}
const cars = [];
function registerCandidates(name, type, car, year, hp) {
  Candidate.call(this, name, car);

  let _hp = hp;

  return {
    name: name,
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
function hpValidator(hp, hpMin, name) {
  function isNumber(hp) {
    return typeof hp === "number";
  }

  if (!isNumber(hp)) {
    console.log(`${name}'s HP is not a number. Please enter a valid number.`);
    return false;
  }
  if (hp < hpMin) {
    console.log(`${name}'s HP is not enough. Minimum required is ${hpMin} HP.`);
    return false;
  }
  return true;
}
function Muscle(name, car, year, hp) {
  const hpMin = 120;
  if (hpValidator(hp, hpMin, name)) {
    const candidate = registerCandidates.call(
      this,
      name,
      "Muscle",
      car,
      year,
      hp
    );
    cars.push(candidate);
  }
}

function Sport(name, car, year, hp) {
  const hpMin = 400;
  if (hpValidator(hp, hpMin, name)) {
    const candidate = registerCandidates.call(
      this,
      name,
      "Sport",
      car,
      year,
      hp
    );
    cars.push(candidate);
  }
}
function SUV(name, car, year, hp) {
  const hpMin = 200;
  if (hpValidator(hp, hpMin, name)) {
    const candidate = registerCandidates.call(this, name, "SUV", car, year, hp);
    cars.push(candidate);
  }
}

const candidate1 = new Muscle("Phillip", "Vectra", 1995, 116);
const candidate2 = new Muscle("Lorena", "Maverick", 1972, 140);
const candidate3 = new SUV("Carlos", "Range Rover", 2020, 250);
const candidate4 = new SUV("Sofia", "Chevrolet Tahoe", 2021, 355);
const candidate5 = new SUV("Lucas", "BMW X5", 2023, 300);
const candidate6 = new Sport("Ana", "Porsche 911", 2022, 450);
const candidate7 = new Sport("Eduardo", "Ferrari 488", 2021, 670);
const candidate8 = new Sport("Gabriela", "Lamborghini Huracán", 2021, 630);

console.log(cars);
