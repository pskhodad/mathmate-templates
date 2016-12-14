import chance = require('../../extlibs/wrap_chance');
import math = require('../../extlibs/wrap_math');
import { memoize } from '../../decorators/memoize';

export class Question {

    E: number;
    D: number;
    W_div_D: number;
    m: number;
    n: number;
    
    constructor() {

        this.E = chance.natural({ min: 2, max: 3 });
        this.D = chance.natural({ min: 5, max: 25 });
        this.W_div_D = chance.natural({ min: 1, max: 3 }) * 20;
        this.m = chance.pickone([2, 4, 5, 10]);
        this.n = chance.pickone([2, 4, 5, 10]);

    }

    get W():number {
        return this.W_div_D * this.D;
    }

    @memoize
    get x():any {
        return chance.natural({ min: 5, max: (this.W_div_D - 2) });
    }

    get y():any {
        return this.E * (this.W_div_D - this.x);
    }

    get W_m(): any {
        return this.W / this.m;
    }

    get cans() {
        return (this.E * this.W);
    }

    get qtxt() {
        return `${this.x} women and ${this.y} children together take ${this.D} hours to complete a piece of work. If ${this.m} women take ${this.W_m} hours to complete the work, how many hours ${this.n} children will take`
    }
}
