// Don't need any of the type annotations in this file.
// Type inference will figure them out by itself

let apples = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let bools: boolean[] = [true, true, false];

// Classes
//class Car {

//}
// let car: Car = new Car();

// Object literal
let point: { x: number; y: number} = {
    x: 10,
    y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}'
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates) // {x: 10, y: 20}

// 2) When you declare a variable on one line and initialize it later
const words = ['red', 'green', 'blue'];
// obviously better way is to initialize foundWord to false
let foundWord: boolean;

for (let i = 0; i < words.length; i++){
    if(words[i] === 'green') {
        foundWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
