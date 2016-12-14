import chance = require('../../extlibs/wrap_chance');

export class Question {
    
    num: number;

    constructor() {
        this.num = chance.natural({ min: 1, max: 98 });
    }

    get cans() {
        return this.num * 99;
    }

    get qtxt() {
        return `$$ ${this.num} \\times 99 $$`
    }
}
