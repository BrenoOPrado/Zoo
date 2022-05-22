const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal !== undefined) {
    const animalObj = data.species.find((item) => item.name === Object.values(animal)[0]);
    if (Object.values(animal).length > 1) {
      const filterSex = animalObj.residents.filter((item) => item.sex === Object.values(animal)[1]);
      return filterSex.length;
    }
    return animalObj.residents.length;
  }
  const generalResult = {};
  data.species.forEach((item) => {
    generalResult[item.name] = item.residents.length;
  });
  return generalResult;
}

module.exports = countAnimals;
