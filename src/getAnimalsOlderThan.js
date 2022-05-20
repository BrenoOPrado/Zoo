const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalObj = Object.values(data.species).find((obj) => obj.name === animal);
  return animalObj.residents.every((residentAge) => residentAge.age >= age);
}

module.exports = getAnimalsOlderThan;
