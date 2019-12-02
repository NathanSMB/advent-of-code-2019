import { Spacecraft } from "../src/Spacecraft";
import { Module } from "../src/Module";
 

const smallModule = new Module(14);
const mediumModule = new Module(1969);
const largeModule = new Module(100756);

test("A module of mass 14 requires 2 fuel.", () => {
    expect(smallModule.fuelRequirement).toBe(2);
});

test("A module of mass 1969 requires 966 fuel.", () => {
    expect(mediumModule.fuelRequirement).toBe(966);
});

test("A module of mass 100756 requires 50346 fuel.", () => {
    expect(largeModule.fuelRequirement).toBe(50346);
});

test("The required fuel for a spacecraft containing all three modules is 51314.", () => {
    let moduleList: Module[] = [ smallModule, mediumModule, largeModule ];

    const spacecraft = new Spacecraft(moduleList);
    expect(spacecraft.fuelRequirement).toBe(51314);
});
