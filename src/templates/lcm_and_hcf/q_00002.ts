import chance = require('../../extlibs/wrap_chance');
import math = require('../../extlibs/wrap_math');
import _ = require('../../extlibs/wrap_lodash');


export class Question {
    
    width: number;

    constructor() {
        this.width = chance.natural({ min: 5, max: 25 }) * 2;
    }

    get length() {
        return chance.pickone(_.range(10, 50).filter((elem) => { return math.gcd(elem, this.width) > 1;}));
    }

    get side() {
        return math.gcd(this.width, this.length);
    }

    get cans() {
        return (this.width * this.length) / <number>(math.pow(this.side, 2));
    }

    get qtxt() {
        return `Minimum number of square shaped tiles of same dimensions required to pave a hall of ${this.width} ft x ${this.length} ft?`
    }
}
