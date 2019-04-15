var chocolateBars = ["snickers", "hundred grand", "kitkat", "snickers"];

function addtoBeginningOfArray(array, element) {
  array.push(element);
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array[0] = element;
}