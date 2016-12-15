import chance = require('../../extlibs/wrap_chance');
import math = require('../../extlibs/wrap_math');
import _ = require('../../extlibs/wrap_lodash');
import { memoizeall } from '../../decorators/memoize';

@memoizeall
export class Question {

    ss: number;

    constructor() {
        this.ss = chance.natural({ min: 1, max: 10 });
    }

    get bs() {
        var lbs = chance.natural({ min: 11, max: 20 });
        if ((lbs % 2) && !(this.ss % 2)) {
            lbs += 1;
        }
        return lbs; 
    }

    get ds() {
        return this.bs + this.ss;
    }

    get us() {
        return this.bs - this.ss;
    }

    get cans(): number {
        return this.ss;
    }

    get qtxt() {
        return `Speed of boat while travelling upstream is ${this.us} km\/hr and downstream is ${this.ds} km/hr. Speed of the stream in km/hr is`
    }
}
