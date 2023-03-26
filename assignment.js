// 1. Count the occurrences.
// You are building a word count generator that will take a large string of text as input and output the words and
// the number of times they are present in the string. Your task is to write a function that can count the
// occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
// assume that the string only contains alphabetic characters and spaces.

const str = 'You are building a word count generator that will take a large string of text as input and output'
let str1 = str.split('')
function occurance(arr) {
    let count = new Map()
for (i=0; i<arr.length; i++) {
    let countItem = arr[i];
    if (count[countItem] = count[countItem]) {
        count[countItem]+= 1;
    } else {
        count[countItem] = 1;
    }
}
return count;
}
console.log(occurance(str1))
// 2. Only unique items are allowed.
// You are building a program that takes an array of numbers as input and you need to remove all the duplicates
// from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
// contains only the unique elements. 
let items = [1,2,4,2,5,6,3,7,4,5,7].sort()
function uniqueItems([...arr]){
let newset = new Set([...arr])
console.log(newset);
}
uniqueItems(items);

// 3. Swap the values.
// You are working on a project that requires you to swap the values of two variables without using a temporary
// variable. You decide to write a function that takes two variables as input and swaps their values using
// destructuring assignment with an array. The function should take the two variables as arguments, destructure
// them into an array, and then swap their positions within the array. Finally, the function should return an array
// with the swapped values. For example, if the function is called with the arguments x = 5 and y = 10, it should
// return an array [10, 5] with x now equal to 10 and y equal to 5.

// function swap (...values) {
//     console.log(values.reverse()) 
// }
// swap(4,5);
function swap(x,y) {
    return [x,y] = [y,x];
}
console.log(swap(5,3));

// 4. Access rlandom elements.
// You are building a program that takes an array of numbers as input and you need to extract the first, second,
// and last elements of the array. You decide to write a function that can accomplish this task using destructuring
// assignment with an array. The function should take the array as an argument, destructure it into three variables
// representing the first, second, and last elements, and then return an array with these three values. For example,
// if the input array is [1, 2, 3, 4, 5], the function should return an array [1, 2, 5].
const randomElement = ([...array])=> {
    console.log([array[0],array[1],array[array.length-1]]);
}
randomElement([1,2,3,5,6])

// 5. Min and max values.
// You are building a program that needs to find the maximum and minimum values in an array of numbers. You
// decide to write a function that can accomplish this task by taking an array of numbers as input and using the
// spread operator with the Math methods max() and min(). The function should return an object with two
// properties, max, and min, representing the maximum and minimum values in the input array, respectively. For
// example, if the input array is [5, 2, 7, 1, 9], the function should return an object { max: 9, min: 1 }.
 function maxMin(...myArray) {
    const x = Math.max(...myArray);
    const y = Math.min(...myArray);
    let obj = {
        max : '',
        min : ''
    }
    obj['max'] = x;
    obj.min = y;
    console.log(myArray);
    return obj;
 }
 console.log(maxMin(7,5,5,12,14,9,3,));

// 6. Nested Objects.
// Write a function that takes an object representing a person as input, and extracts the name and street
// properties from a nested object using object destructuring. The function should return an object with these two
// properties. A sample object is given below.
const person = {
    name : 'mithun',
    age : 21,
    address : {
        street : 'b8, block 8, Industrial aria',
        city : 'sector 62, noida',
        state : 'uttarpradesh'
    },
};
function nestedObject(...person){
for (const {
    name: n,
    address: { street: s },
  } of person) {
    console.log(`Name: ${n}, street: ${s}`);
  }
}
nestedObject(person)