const data = require('../data/zoo_data');

function getScheduleDay(day) {
  const obj = {};
  const dayHour = Object.values(data.hours[day]);
  if (dayHour.some((number) => number === 0)) {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  const arrAnimals = [];
  data.species.forEach((Obj) => {
    if (Obj.availability.some((element) => element === day)) {
      arrAnimals.push(Obj.name);
    }
  });
  obj[day] = {
    officeHour: `Open from ${dayHour[0]}am until ${dayHour[1]}pm`,
    exhibition: arrAnimals,
  };
  return obj;
}
function getScheduleAnimal(animal) {
  const daysAnimal = data.species.find((animalName) => animalName.name === animal);
  return daysAnimal.availability;
}
function getScheduleGeneral() {
  const obj = {};
  Object.keys(data.hours).forEach((days) => {
    obj[days] = getScheduleDay(days)[days];
  });
  return obj;
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
  return getScheduleGeneral();
}

module.exports = getSchedule;
