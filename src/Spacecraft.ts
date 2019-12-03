import { Module } from "./Module";
import { Computer } from "./Computer";

export class Spacecraft {
    private computer = new Computer();

    constructor(public modules: Module[]) {}

    get fuelRequirement(): number {
        let sumOfFuel = 0;
        for (const module of this.modules) {
            sumOfFuel += module.fuelRequirement;
        }
        return sumOfFuel;
    }
}
