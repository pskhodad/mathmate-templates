import chance = require('../../extlibs/wrap_chance');
import math = require('../../extlibs/wrap_math');

export class Question {
    
    xpow: number;
    zpow: number;
    x: number;
    y: number;

    constructor() {
        this.xpow = chance.natural({ min: 2, max: 3 });
        this.zpow = chance.natural({ min: 2, max: 3 });
        this.x = chance.natural({ min: 5, max: 10 });
        this.y = chance.natural({ min: 5, max: 15 });
    }

    get z():number {
        return this.x + this.y;
    }

    get zn():any {
        return math.pow(this.z, this.zpow);
    }    

    get cans() {
        return math.pow(this.x, this.xpow);
    }

    get qtxt() {
        return `$$ \\sqrt[${this.xpow}]{X}+${this.y} = \\sqrt[${this.zpow}]{${this.zn}} $$, value of $$ X $$ is`
    }
}

let q = new Question();
console.log(q.qtxt);
console.log(q.cans);
