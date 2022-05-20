const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const arr = [];
  if (ids !== []) {
    ids.forEach((id) => {
      arr.push(Object.values(data.species).find((obj) => id === obj.id));
    });
  }
  return arr;
}

module.exports = getSpeciesByIds;
