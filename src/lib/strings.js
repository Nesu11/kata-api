const sayHello = (string) => {
  return 'Hello ' + string  + '!';
};

const uppercase = (string) => {
  return string.toUpperCase();
};

const lowercase = (string) => {
  return string.toLowerCase();
};

const countCharacters = (string) => {
  return string.length; // your code here
};

const firstCharacter = (string) => {
  return string.charAt(0);
};

const firstCharacters = (string, n) => {
  return string.substring(0, n); // your code here
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
