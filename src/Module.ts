export class Module {
    constructor (public mass: number) {}

    get fuelRequirement () {
        return this.calculateFuel(this.mass);
    }

    private calculateFuel(mass: number): number {
        let fuel = Math.floor(mass / 3) - 2
        if (fuel <= 0) {
            return 0;
        }
        return fuel + this.calculateFuel(fuel);
    }
}
