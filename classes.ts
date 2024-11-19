class Vehicle {
    color: string = 'red';

    constructor(color: string) {
        this.color = color;
    }

    protected honk(): void {
        console.log('honk')
    }
}

class Car extends Vehicle{
    constructor(public wheels: number, color: string) {
        super(color);
    }
    private drive(): void {
        console.log('vroom')
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car(4, 'red');

//const vehicle = new Vehicle('orange');
// vehicle.drive()
//vehicle.honk();
//car.honk();
car.startDrivingProcess();