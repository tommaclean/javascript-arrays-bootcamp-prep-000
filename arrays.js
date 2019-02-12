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

function addElementToEndOfArray(array, ele) {
  new_array = [...array, ele]
  return new_array
}

function destructivelyAddElementToEndOfArray(array, ele) {
  array.push(ele)
  array = [ele, ...array]
  return array
}