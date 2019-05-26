const getNthElement = (index, array) => {
  return array[index % array.length];
  // return array[index];
}; // n index divided by array.length (in this case 4) the remainder points to new index

const arrayToCSVString = (array) => {
  return array.join(',')// your code here
};

const csvStringToArray = (string) => string.split(','); // es6


const addToArray = (element, array) => {
  array.push(element);
}; // your code here


const addToArray2 = (element, array) => {
  const newArray = [];
  array.map((firstArrayIndex) => newArray.push(firstArrayIndex));
  newArray.push(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1) // your code here
};

const numbersToStrings = (numbers) => {
  return  numbers.map((num) => num.toString());
};
  // map over number arr -> call back (()) -> current value (n/num) -> return each current value as str after mapping


const uppercaseWordsInArray = (strings) => {
  return strings.map(strings.toUpperCase) // your code here
};

const reverseWordsInArray = (strings) => {
  // your code here
};

const onlyEven = (numbers) => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = (strings) => {
  // your code here
};

const removeSpaces = (string) => {
  return string.filter(entry => /\S/.test (entry)) // your code here
};

const sumNumbers = (numbers) => {
  // your code here
};

const sortByLastLetter = (strings) => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
