const data = require('../data/zoo_data');

function isManager(id) {
  const obj = Object.values(data.employees).find((person) => person.id === id);
  if (obj.managers.length < 2) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  const arr = [];
  if (isManager(managerId)) {
    const filter = (obj) => obj.managers.find((id) => id === managerId);
    const managerArr = Object.values(data.employees).filter(filter);
    managerArr.forEach((element) => arr.push(`${element.firstName} ${element.lastName}`));
  } else {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return arr;
}

module.exports = { isManager, getRelatedEmployees };
