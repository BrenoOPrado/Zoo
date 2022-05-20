const data = require('../data/zoo_data');

function getEmployeeByName(employee) {
  const condicion = (flName) => flName.firstName === employee || flName.lastName === employee;
  if (employee !== undefined) {
    return Object.values(data.employees).find(condicion);
  }
  return {};
}

module.exports = getEmployeeByName;
