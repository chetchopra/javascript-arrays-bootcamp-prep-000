var chocolateBars = ["snickers", "hundred grand", "kitkat", "snickers"];

function addElementToBeginningOfArray(array, element) {
  array = array.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array[0] = element;
}