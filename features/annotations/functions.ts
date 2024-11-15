
// Uses type inference for input variables
const add = (a: number, b: number): number => {
    return a + b
}

// Doesn't use type inference for input variables
const addNumber: (a: number, b: number) => number = (a: number, b: number) => {
    return a + b;
}

// Need to specify return on function otherwise type inference will allow a void
// to be returned when we meant for a number
// const subtract = (a: number, b: number): number => {
//     a - b
// }

const subtract2 = (a: number, b: number) => {
    a - b
}

// Always add return type
function divide(a: number, b: number): number {
    return a / b;
}


// Even on annonymous functions
const multiply = function(a: number, b: number): number {
 return a * b;
}

const logger = (message: string): void => {
    console.log(message);
}

// We will never finish the function because we throw an error
// so the return type is never. This would be very rare
// const throwError = (message: string): never => {
//     throw new Error(message)

//     return message;
// }

const todaysForcast = {
    date: new Date(),
    weather: 'sunny'
}

const logForecst = ({date, weather}: {date: Date; weather: string}): void => {
    console.log(date)
    console.log(weather)
}

// ES2015
const logWeather = ({ date, weather}) => {
    console.log(date, weather);
}

logForecst(todaysForcast);
