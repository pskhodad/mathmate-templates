import chance = require('../../extlibs/wrap_chance');

export class Question {
    
    num: number;

    constructor() {
        this.num = (chance.natural({ min: 1, max: 10 }) * 10) + 5;
    }

    get cans() {
        return this.num * this.num;
    }

    get qtxt() {
        return `$$ ${this.num}^2 $$`
    }
}
