import chance = require('../../extlibs/wrap_chance');

export class Question {
    
    num: number;

    constructor() {
        this.num = chance.natural({ min: 41, max: 59 });
    }

    get cans() {
        return this.num * this.num;
    }

    get qtxt() {
        return `$$ ${this.num}^2 $$`
    }
}

let q = new Question();
console.log(q.qtxt);
console.log(q.cans);
