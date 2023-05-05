// The For Loop
// .........

let numbers = [10, 30, 45, 22, 51, 37, ""]
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// ...................................................................................................

// The For Of Loop
// ...............

let array = [12, 29, 40, 18, 55, 34]
for(let value of array) {
    console.log(value)
}


let arr = [
    {id: 1, name: "Abdul Manan", age:21},
    {id: 2, name: "Ali Haider", age:18},
    {id: 3, name: "M Ahmad", age:22}
]
for(let value of arr) {
    console.log(value)
}

// ...................................................................................................


// The For In Loop
// ...............

let obj = { id: 1, fName: "Abdul", lName: "Manan", age:21 }
// console.log(obj.id)
// console.log(obj["age"])
for(let prop in obj) {
    // console.log(obj[prop])
    console.log(prop, obj[prop])
}

let array1 = [12, 29, 40, 18, 55, 34]
for(let value in array1) {
    console.log(value)
    console.log(array1[value])
}

// ...................................................................................................


// The forEach() method
// ....................

let nums = [1, 3, 4, 7, 10, 12]
nums = nums.forEach(function(element, index, array) {
    // console.log(index)
    // console.log(element)
    console.log(element, index, array)
})

let arr1 = [
    {id: 1, name: "Abdul Manan", age:21},
    {id: 2, name: "Ali Haider", age:18},
    {id: 3, name: "M Ahmad", age:22}
]
arr1.forEach(function(element, index, array){
    console.log(element, index, array)
})

let arr2 = [
    {id: 1, name: "Abdul Manan", age:21},
    {id: 2, name: "Ali Haider", age:18},
    {id: 3, name: "M Ahmad", age:22}
]
arr2.forEach(function(element, index, array){
    if (element.id === 1) {
        console.log(element, index, array)
    }
})

// with arrow function
let arr3 = [
    {id: 1, name: "Abdul Manan", age:21},
    {id: 2, name: "Ali Haider", age:18},
    {id: 3, name: "M Ahmad", age:22}
]

arr3.forEach((e, i, arr)=>{
    console.log(e, i, arr)
})

// ...................................................................................................


// The map() method
// ................

var nums1 = [1, 3, 4, 7, 10, 12]
nums1 = nums1.map(function(element) {
    return element < 8
})
console.log(nums1)

// ...................................................................................................


// The filter() method
// ...................

var nums2 = [1, 3, 4, 7, 10, 12]
nums2 = nums2.filter(function(element) {
    return element < 8
})
console.log(nums2)

// ...................................................................................................


// The find() method
// .................

var nums3 = [1, 3, 4, 7, 10, 12]
nums3 = nums3.find(function(element) {
    return element < 8
})
console.log(nums3)

// ...................................................................................................


// Difference Between map(), filter(), find() method
// .................................................

let users = [
    { id: 1, name: "Manan", age:21, email: "abc@gmail.com" },
    { id: 2, name: "Ali", age:18,  email: "ab@gmail.com" },
    { id: 3, name: "Ahmad", age:22,  email: "abd@gmail.com" },
    { id: 4, name: "Ali", age:19,  email: "a@gmail.com" }
]

// map() method
var mapUsers = users.map((elem) => {
    return elem.name == "Ali"        // only return ture/false
})
console.log(mapUsers)

// filter() method
var filterUsers = users.filter((elem) => {
    return elem.name == "Ali"      // return all values that fulfil condition
})
console.log(filterUsers)

// find() method
var findUsers = users.find((elem) => {
    return elem.name == "Ali"           // return only single value that fulfil 1st condition
})
console.log(findUsers)

// ...................................................................................................


// The sort() method
// .................................................

var numbersForSort = [10, 30, 402, 210, 9, 60, 70, 50, 80]
console.log(numbersForSort.sort())

var numbersForSort = [10, 30, 40, 20, 90, 60, 70, 50, 80]
numbersForSort = numbersForSort.sort((a, b) => b - a)
console.log(numbersForSort)

var numbersForSort = [10, 30, 40, 20, 90, 60, 70, 50, 80]
numbersForSort = numbersForSort.sort((a, b) => {
    return a - b
} )
console.log(numbersForSort)