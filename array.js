// Comment in js

// Create an array 
// Create an empty array 
// Two ways to make an array

var myArr = new Array()

// Preffered Method 
var myArr2 = []

// Create an array of a certain size 
var myBigArr = new Array(100)

var myBigArr2 = [1, 2, 3, 4, 5]
var myBigArr3 =[,,,,]


var array = []
array.length = 8

// Give us the size of the array 
array.length

// Position of items in the array
// index          0        1         2
var superArr = ['rock', 'paper', 'scissors']
//0 base, starts at zero 

// Get a value with the index
superArr[1]

// Insert in the array 
var supArr = []

supArr.push('Stan Lee', 'Spiderman', 1)

// It will add into the beginning of an array 
supArr.unshift(1, 2.3, true)

//remove 

// Mutable vs Immutable
// Mutable are items that can be changed 
// Immutable are items that can not be changed 

var sArr = [1, 2, 3]

// Removes the last element of the array and returns it, mutable
sArr.pop

// Removes the first element of the array and returns it, mutable
sArr.shift

// Mutable
delete sArr[2]

// Immutable
sArr.slice(2)



// Iterate, going through an array, loops 
var nums = [ 1, 2, 3, 4, 5 ]

// forEach
nums.forEach(function(num, index) {
    console.log("index of: " + index + "values: " + num)
})


// map 
nums.map(function(num, index) {
    console.log(num++)
})

// filter
nums.filter(function(num, index) {
    console.log(num % 2 == 0)
})

    ['s', 23, 23.2, true, false].filter(boolean)


// for
for (var index=0; index < nums.length; index++) {
    console.log(num[index])
})









// Type checking
// Checks for what datatype is something?
typeof []
typeof 0
typeof true


// misc functions 
var lastArr = ["rock", "green", "blue"]

// Returns a string of what the array looks like 
lastArr.toString

// Brings two values together 
lastArr.join

// Reverses the array 
lastArr.reverse

// Put the items in order, asc, alphabetical for
// Strings, numbers and floats < >
lastArr.sort()

// Search the array 
lastArr.find()

// Tell the index of the value 
lastArr.indexOf()

// Boolean on if the array includes a value 
lastArr.includes()

// Combine two arrays
lastArr.concat()


