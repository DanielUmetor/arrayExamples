// ===How to create an array===
// Array literal
 // let numbers = [9, 3, 8, 11, 63]
// console.log(numbers);
// Add a new element
// numbers.push(21, 'Khanya')
// console.log(numbers);
// Remove the last element
// numbers.pop
// console.log(numbers);
// console.log(numbers.pop());
// console.log(numbers);
// Find a element
// console.log(numbers.find(value => value == 9));
//             
// console.log(numbers.findIndex(value => value == 9));
// Array constructor
// let data = new Array('Khanya', 'John', 15, 18)
// Array.of ()
// let myArr1 = Array.of(9, 2, 4)
// Array.from
// let myArr2 = Array.from(numbers)
// Array.fill

// let emoji = new Array(4).fill('👍')  


// Create someting that displays the middle value in an Array
// let newArray = [1, 6, 5, 9, 11]
// function middleElement (arr) {
   // let index = Math.trunc((arr.length -1) / 2)
   // if (index % 2 == 0) {
     //   console.log(arr[index]);
  //  }  else {
    //    console.log(arr[index], data[index + 1]);
  //  }
//  }
// middleElement(numbers) 

// How to combine arrays
// let oddNumbers = [5, 7]
// let combArr = numbers.concat(oddNumbers)   // combArr = combine arrays
// console.log(combArr);

// Two ways to combine arrays is "concat" and "spread" operator

// Using spread operator
 // let combArr2 = [...numbers, ...oddNumbers]
// console.log(combArr2);

// let numbers = [9, 3, 8, 11, 63]
 // Sorting an Array

 // numbers.sort((a, b) => a - b);
 // console.log(numbers);
// let sortedNumbers = 
//     numbers.toSorted((c, n)=> c -n)
//     console.log(sortedNumbers); 

 // Make use of filter == search
// console.log('filter()');
// console.log(numbers.filter(value => value% 2 >= 1));

// Map 
console.log('Original Array');
console.log(numbers);
console.log('map()');
console.log(numbers.map());

function double(c) {
    return c * 2
}   


