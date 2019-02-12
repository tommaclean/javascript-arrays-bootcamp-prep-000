var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, ele) {
  new_array = [ele, ...array]
  return new_array
}

function destructivelyAddElementToBeginningOfArray(array, ele) {
  array.unshift(ele)
  array = [ele, ...array]
  return array
}

