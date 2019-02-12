var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(new_array, ele) {
  new_array.unshift(ele)
  return new_array
}

function destructivelyAddElementToBeginningOfArray(new_array, ele) {
  new_array.unshift(ele)
  new_array = [ele, ...new_array]
  return new_array
}