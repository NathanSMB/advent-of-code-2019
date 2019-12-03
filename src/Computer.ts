import { OpcodeError } from "./Opcode.error";

export class Computer {
    private memory: (number | undefined) [] = [];

    constructor (opcode?: number[]) {
        if (opcode) {
            this.load(opcode);
        }
    }

    public load (opcode: number[]) {
        this.memory = opcode;   
    }

    public run () {
        for (let address = 0; address < this.memory.length; address += 4) {
            const code = this.memory[address];
            if (code === 1) {
                this.addFrom(address);
            } else if (code === 2) {
                this.multiplyFrom(address);
            } else if (code === 99) {
                break;
            } else {
                throw new OpcodeError();
            }
        }
    }

    public get (index: number) {
        return this.memory[index];
    }

    public set(address: number, value: number) {
        this.memory[address] = value;
    }

    private addFrom (index: number) {
        const { targetAddress, value1, value2 } = this.getInstructionParameters(index);
        this.memory[targetAddress] = value1 + value2;
    }

    private multiplyFrom (index: number) {
        const { targetAddress, value1, value2 } = this.getInstructionParameters(index);
        this.memory[targetAddress] = value1 * value2;
    }

    private getInstructionParameters(index: number) {
        const targetAddress = this.memory[index + 3];
        const value1Address= this.memory[index + 1];
        const value2Address = this.memory[index + 2];

        if (targetAddress === undefined || value1Address === undefined || value2Address === undefined) {
            throw new ReferenceError();
        }

        const value1 = this.memory[value1Address];
        const value2 = this.memory[value2Address];

        if (value1 === undefined || value2 === undefined) {
            throw new ReferenceError();
        }

        return {
            targetAddress,
            value1,
            value2,
        };
    }
}
