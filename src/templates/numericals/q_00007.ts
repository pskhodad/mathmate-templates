import chance = require('../../extlibs/wrap_chance');

export class Question {
    
    num: number;

    constructor() {
        this.num = chance.natural({ min: 20, max: 20000 }) * 2;
    }

    get avg() {
        return this.num + 1;
    }

    get cans() {
        return this.num - 2;
    }

    get qtxt() {
        return `Average of 4 consecutive even numbers is ${this.avg}, smallest number is `
    }
}
