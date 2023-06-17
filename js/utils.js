function getRandomNumber (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomArrayElement (array) {
  return array[getRandomNumber(0, array.length - 1)];
}

function isLenghtCorrect (message, maxLength) {
  if (message.length <= maxLength) {
    return true;
  }
  return false;
}

isLenghtCorrect('test', 5);

export {getRandomNumber, getRandomArrayElement};
