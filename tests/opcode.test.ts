import { Computer } from "../src/Computer";
import { OpcodeError } from "../src/Opcode.error";

test("Expect opcode [1,0,0,0,99] to have 2 at address 0 after running.", () => {
    const opcode = [1,0,0,0,99];
    const computer = new Computer(opcode);
    computer.run();
    expect(computer.get(0)).toBe(2);
});

test("Expect opcode [2,3,0,3,99] to have 6 at address 3 after running", () => {
    const opcode = [2,3,0,3,99];
    const computer = new Computer(opcode);
    computer.run();
    expect(computer.get(3)).toBe(6);
});

test("Expect opcode [2,4,4,5,99,0] to have 9801 at address 5 after running", () => {
    const opcode = [2,4,4,5,99,0];
    const computer = new Computer();
    computer.load(opcode);
    computer.run();
    expect(computer.get(5)).toBe(9801);
});

test("Expect opcode [1,1,1,4,99,5,6,0,99] to have 30 at address 0 and 2 at address 4 after running", () => {
    const opcode = [1,1,1,4,99,5,6,0,99];
    const computer = new Computer();
    computer.load(opcode);
    computer.run();
    expect(computer.get(0)).toBe(30);
    expect(computer.get(4)).toBe(2);
});

test("Invalid opcode throws error when run.", () => {
    const opcode = [5,1,1,4,99,5,6,0,99];
    const computer = new Computer(opcode);
    expect(() => computer.run()).toThrow(OpcodeError);
});

test("Loading a new opcode overwrites old one.", () => {
    const opcode = [2,3,0,3,99];
    const opcodeReloaded = [2,4,4,5,99,0];
    const opcodeRevolutions = [1,0,0,0,99];

    const computer = new Computer(opcode);
    expect(computer.get(1)).toBe(3);
    
    computer.load(opcodeReloaded);
    expect(computer.get(1)).toBe(4)
    
    computer.load(opcodeRevolutions);
    expect(computer.get(1)).toBe(0);
});

test("Can set memory address to a value.", () => {
    const opcode = [1, 1, 1, 3];
    const computer = new Computer(opcode);

    expect(computer.get(2)).toBe(1);
    computer.set(2, 2);
    expect(computer.get(2)).toBe(2);
});

test("Errors are thrown on bad opcode.", () => {
    const opcode = [2,3];
    const computer = new Computer(opcode);
    expect(() => computer.run()).toThrow(ReferenceError);

    const anotherBrokenOpcode = [2,4,10,300];
    computer.load(anotherBrokenOpcode);
    expect(() => computer.run()).toThrow(ReferenceError);
});
