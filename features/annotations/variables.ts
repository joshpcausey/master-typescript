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
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number} = {
    x: 10,
    y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}