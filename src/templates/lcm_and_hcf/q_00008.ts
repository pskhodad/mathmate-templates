import chance = require('../../extlibs/wrap_chance');
import math = require('../../extlibs/wrap_math');
import _ = require('../../extlibs/wrap_lodash');
import { memoize } from '../../decorators/memoize';

export class Question {
    
    f1: mathjs.Fraction;
    f2: mathjs.Fraction;    

    constructor() {
        this.f1 = math.fraction(chance.natural({ min: 5, max: 25 }), chance.natural({ min: 5, max: 25 }));
        this.f2 = math.fraction(chance.natural({ min: 5, max: 25 }), chance.natural({ min: 5, max: 25 }));
    }    

    get cans():mathjs.Fraction {
        return math.lcm(this.f1, this.f2);
    }

    get cans_fmt():string {
        return `${ math.format(this.cans, 14) }`;
    }

    get qtxt():string {
        return `LCM of ${ math.format(this.f1, 14) } and ${ math.format(this.f2, 14) }`
    }
}
