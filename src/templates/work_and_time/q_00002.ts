import chance = require('../../extlibs/wrap_chance');
import math = require('../../extlibs/wrap_math');
import { memoize } from '../../decorators/memoize';

export class Question {

    D_m: number;
    m: number;
    
    constructor() {
        this.D_m = chance.natural({ min: 5, max: 25 });
        this.m = chance.natural({ min: 5, max: 25 });
    }

    get D_1() {
        return this.m * this.D_m;
    }

    get cans() {
        return this.D_m;
    }

    get qtxt() {
        return `If one woman can finish a work in ${this.D_1} days, how many days ${this.m} women will take`
    }
}
