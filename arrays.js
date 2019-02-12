var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(new_array, ele) {
  new_array.unshift(ele)
  return new_array
}

function destructivelyAddElementToBeginningOfArray(array, ele) {
  array.unshift(ele)
  array = [ele, ...array]
  return array
}