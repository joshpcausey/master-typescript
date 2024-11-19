const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
    ["f150", "corolla", "camero"]
]

// Help with inference when extracting values
//const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatable values
// carMakers.push(100)

// Help with 'map'
carMakers.map((car): string => {
    return car.toUpperCase();
})

// Flexable types
const importantDates: (Date | string)[] = [new Date, '2030-10-10']
importantDates.push('2030-10-10')
importantDates.push(new Date());
// importantDates.push(100)