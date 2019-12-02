import { Module } from "./Module";

export class Spacecraft {
    constructor (public modules: Module[]) {}

    get fuelRequirement () {
        let sumOfFuel = 0;
        for (const module of this.modules) {
            sumOfFuel += module.fuelRequirement;
        }
        return sumOfFuel;
    }
}
