const data = require('../data/zoo_data');

function getScheduleDay(day) {

}
function getScheduleAnimal(animal) {

}
function getScheduleGeneral(general) {

}

function getSchedule(scheduleTarget) {
  const daySome = Object.keys(data.hours).some((item) => item === scheduleTarget);
  const animalSome = Object.values(data.species).some((item) => item.name === scheduleTarget);
  if (daySome) {
    return getScheduleDay(scheduleTarget);
  }
  if (animalSome) {
    return getScheduleAnimal(scheduleTarget);
  }
  return getScheduleGeneral(scheduleTarget);
}

console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
