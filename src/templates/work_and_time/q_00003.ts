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

    get cans() {
        return this.D_m * this.m;
    }

    get qtxt() {
        return `If ${this.m} women take ${this.D_m} days to finish a work, how many days one woman will take`
    }
}
