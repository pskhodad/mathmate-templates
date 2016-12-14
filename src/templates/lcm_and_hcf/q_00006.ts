import chance = require('../../extlibs/wrap_chance');
import math = require('../../extlibs/wrap_math');
import _ = require('../../extlibs/wrap_lodash');
import { memoize } from '../../decorators/memoize';

export class Question {
    
    n1: number;
    n2: number;    

    constructor() {
        this.n1 = chance.natural({ min: 5, max: 25 }) * 2;
        this.n2 = chance.natural({ min: 5, max: 25 }) * 2;
    }

    @memoize
    get n3() {
        return chance.pickone(_.range(10, 50).filter((elem) => { return math.gcd(elem, this.n1) > 1; }));
    }

    get cans() {
        return math.lcm(math.lcm(this.n1, this.n2), this.n3);
    }

    get qtxt() {
        return `LCM of ${this.n1}, ${this.n2} and ${this.n3}`
    }
}
