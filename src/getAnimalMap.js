const data = require('../data/zoo_data');

function animalMap(options) {
  const result = {};
  data.species.forEach((obj) => {
    if (!Object.keys(result).some((key) => key === obj.location)) {
      const filterAnimals = data.species.filter((loc) => loc.location === obj.location);
      const filterAnimalsMap = filterAnimals.map((animals) => animals.name);
      result[obj.location] = filterAnimalsMap;
    }
  });
  return result;
}

function includeName(element, sex) {
  const elementObj = data.species.find((obj) => obj.name === element);
  const namesObj = [];
  if (sex === undefined) {
    elementObj.residents.forEach((resident) => {
      namesObj.push(resident.name);
    });
  } else {
    const elementObjFilter = elementObj.residents.filter((item) => item.sex === sex);
    elementObjFilter.forEach((resident) => {
      namesObj.push(resident.name);
    });
  }
  return namesObj;
}

function animalMapIncludeName(generalMap, sex, sort) {
  const namesArr = [];
  Object.keys(generalMap).forEach((key) => {
    generalMap[key].forEach((element, index) => {
      const names = includeName(element, sex);
      if (sort !== undefined) {
        names.sort();
      }
      namesArr.push(names);
      console.log(namesArr);
    });
  });
}

function getAnimalMap(options) {
  const param = [];
  if (options !== undefined) {
    if (Object.keys(options).some((key) => key === 'includeNames')) {
      param.push(animalMap(options));
    }
    if (Object.keys(options).some((key) => key === 'sex')) {
      param.push(options.sex);
    }
    if (Object.keys(options).some((key) => key === 'sorted')) {
      param.push(options.sorted);
    }
    return animalMapIncludeName(...param);
  }
  return animalMap(options);
}

console.log(getAnimalMap({ includeNames: true, sex: 'female' }));

module.exports = getAnimalMap;
