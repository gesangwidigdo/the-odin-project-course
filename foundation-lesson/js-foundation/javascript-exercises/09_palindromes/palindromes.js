const palindromes = function (word) {
  const alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789'

  const filteredString = word.toLowerCase()
                              .split('')
                              .filter((character) => alphanumeric.includes(character))
                              .join('');
  const reversedString = filteredString.split('').reverse().join('');

  return filteredString === reversedString
};

// Do not edit below this line
module.exports = palindromes;
