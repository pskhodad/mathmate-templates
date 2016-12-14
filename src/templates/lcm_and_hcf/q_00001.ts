import chance = require('../../extlibs/wrap_chance');
import math = require('../../extlibs/wrap_math');

export class Question {
    
    nplayers: number;
    ts: Array<number>;
    names: Array<string>;

    constructor() {
        this.nplayers = chance.natural({ min: 2, max: 4 });
        this.ts = chance.n(chance.natural, this.nplayers, { min: 5, max: 30 });
        this.names = chance.unique(chance.first, this.nplayers, { comparator: function (arr, val) { return arr.indexOf(val) !== -1; } })
    }

    get cans() {
        return math.lcm.apply(null, this.ts);
    }

    get qtxt() {
        return `${this.names} start running around a circular stadium and complete one round in ${this.ts} seconds respectively. In how much time will they meet at starting point again?`
    }
}
