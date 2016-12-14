import chance = require('../../extlibs/wrap_chance');

export class Question {
    
    num1: number;
    num2: number;

    constructor() {
        this.num1 = chance.natural({ min: 1, max: 8 }) * 10;
        this.num2 = chance.natural({ min: 1, max: 4 });
    }

    get num3(): number {
        return  this.num1 + this.num2;
    }

    get num4(): number {
        return  this.num1 + 10 - this.num2;
    }    

    get cans() {
        return this.num3 * this.num4;
    }

    get qtxt() {
        return `$$ ${this.num3} \\times ${this.num4} $$`
    }
}
