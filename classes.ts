class Vehicle {
    protected honk(): void {
        console.log('honk')
    }
}

class Car extends Vehicle{
    private drive(): void {
        console.log('vroom')
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car();

const vehicle = new Vehicle();
// vehicle.drive()
vehicle.honk();
car.honk();
car.startDrivingProcess();