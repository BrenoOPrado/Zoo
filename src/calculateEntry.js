const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const people = { adult: 0, child: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age < 18) {
      people.child += 1;
    } else if (element.age < 50) {
      people.adult += 1;
    } else if (element.age >= 50) {
      people.senior += 1;
    }
  });
  return people;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.values(entrants).length === 0) {
    return 0;
  }
  const people = countEntrants(entrants);
  const adults = Object.values(people)[0] * data.prices.adult;
  const child = Object.values(people)[1] * data.prices.child;
  const senior = Object.values(people)[2] * data.prices.senior;
  return adults + child + senior;
}

module.exports = { calculateEntry, countEntrants };
