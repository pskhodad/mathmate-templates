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

    get dist() {
        return math.lcm(this.us, this.ds) * chance.natural({ min: 2, max: 5 });
    }

    get ut() {
        return this.dist / this.us; 

    }

    get dt() {
        return this.dist / this.ds;
    }

    get cans(): number {
        return this.dt;
    }

    get qtxt() {
        return `If speed of boat in still water is ${this.bs} km/hr and speed of the stream is ${this.ss} km/hr, time to travel ${this.dist} km downstream is`
    }
    
}
