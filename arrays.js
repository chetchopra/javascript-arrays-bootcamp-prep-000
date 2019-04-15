var chocolateBars = ["snickers", "hundred grand", "kitkat", "snickers"];

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  array[2] = 'foo';
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array[0] = element;
}