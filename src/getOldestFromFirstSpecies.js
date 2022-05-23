const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const person = data.employees.find((obj) => obj.id === id);
  const animal = person.responsibleFor[0];
  const animalObj = data.species.find((obj) => obj.id === animal);
  let age = 0;
  let oldestAnimalIndex;
  animalObj.residents.forEach((resident, index) => {
    if (resident.age > age) {
      age = resident.age;
      oldestAnimalIndex = index;
    }
  });
  return Object.values(animalObj.residents[oldestAnimalIndex]);
}

module.exports = getOldestFromFirstSpecies;
