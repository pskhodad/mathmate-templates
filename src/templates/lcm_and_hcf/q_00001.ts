import chance = require('../../extlibs/wrap_chance');
import math = require('../../extlibs/wrap_math');
import { memoize } from '../../decorators/memoize';

export class Question {
    
    nplayers: number;

    constructor() {
        this.nplayers = chance.natural({ min: 2, max: 4 });
    }

    @memoize
    get ts() : Array<number> {
        return chance.n(chance.natural, this.nplayers, { min: 5, max: 30 });
    }

    @memoize
    get names() : Array<string> {
        return chance.unique(chance.first, this.nplayers, { comparator: function (arr, val) { return arr.indexOf(val) !== -1; } });
    }

    get cans() {
        return math.lcm.apply(null, this.ts);
    }

    get qtxt() {
        return `${this.names} start running around a circular stadium and complete one round in ${this.ts} seconds respectively. In how much time will they meet at starting point again?`
    }
}
