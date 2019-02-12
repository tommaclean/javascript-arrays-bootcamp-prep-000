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

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array = array.pop()
  return array

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}