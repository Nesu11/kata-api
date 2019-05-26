const createPerson = (name, age) => {
 return {name:name, age:age}  // your code here
};

const getName = (object) => {
  return object.name // your code here
};

const getProperty = (property, object) => {
  return object[property]// your code here
};

const hasProperty = (property, object) => {
 return object.hasOwnProperty(property)  // your code here
};

const isOver65 = (person) => {
 return person.age > 65 // your code here
};

const getAges = (people) => {
 return people.map(peron.age) // your code here
};

const findByName = (name, people) => {
  // your code here
};

const findHondas = (cars) => {
  // your code here
};

const averageAge = (people) => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
