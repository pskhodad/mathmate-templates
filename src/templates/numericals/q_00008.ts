import chance = require('../../extlibs/wrap_chance');

export class Question {
    
    x: number;
    y: number;

    constructor() {
        this.x = chance.natural({ min: 5, max: 25 });
        this.y = chance.natural({ min: 5, max: 25 });
    }

    get cans() {
        return (this.x * this.x) - (2 * this.x * this.y) + (this.y * this.y);
    }

    get qtxt() {
        return `$$ ${this.x} \\times ${this.x} - 2 \\times ${this.x} \\times ${this.y} + ${this.y} \\times ${this.y} $$`
    }
}
