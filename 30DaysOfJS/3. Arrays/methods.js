
// ❌ .fill: Fill all the array elements with a static value

let emptyArray = []
emptyArray = Array(3).fill('C')

const fillArray = emptyArray
console.log(fillArray) // ['C', 'C', 'C']

// .concat method ✅

const firstArrayToConcat = [1, 2, 3, 4, 5]
const secondArrayToConcat = ['Balazs', 'Koos', 'Bence']

const concatArray = firstArrayToConcat.concat(secondArrayToConcat)

console.log(concatArray)

// .length method ✅

const numbersArrayLength = [1, 2, 3, 4, 5]

let lengthOfArray = numbersArrayLength.length

console.log(lengthOfArray)

// ❌ .indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.

const indexOfArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(indexOfArray.indexOf(0))
console.log(indexOfArray.indexOf(1)) 
console.log(indexOfArray.indexOf(6))
console.log(indexOfArray.indexOf(15))

// ❌ .lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

const lastIndexOfArray = [1, 2, 3, 4, 5, 6]

console.log(lastIndexOfArray.lastIndexOf(0))
console.log(lastIndexOfArray.lastIndexOf(1))
console.log(lastIndexOfArray.lastIndexOf(3))
console.log(lastIndexOfArray.lastIndexOf(7))

// ❌ .includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

// ❌ Array.isArray: To check if the data type is an array

// ❌ .toString:Converts array to string

// ❌ .join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.

// ❌ .slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

// ❌ .splice: It takes three parameters: Starting position, number of times to be removed and number of items to be added.

// ❌ .push: adding item in the end. To add item to the end of an existing array we use the push method.

// ❌ .pop: Removing item in the end.

// ❌ .shift: Removing one array element in the beginning of the array.

// ❌ .unshift: Adding array element in the beginning of the array.

// ❌ .reverse: reverse the order of an array.

// ❌ .sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.