import chance = require('../../extlibs/wrap_chance');
import math = require('../../extlibs/wrap_math');
import _ = require('../../extlibs/wrap_lodash');
import { memoizeall } from '../../decorators/memoize';

@memoizeall
export class Question {

    time: number;
    speed: number;

    constructor() {
        this.time = chance.natural({ min: 5, max: 25 }) * 2;
        this.speed = chance.natural({ min: 5, max: 25 }) * 2;
    }

    get time_x_speed():number {
        return this.time * this.speed;
    }

    get m_plus_1():number {
        return math.gcd(chance.pickone(_.range(3, 16).filter((val) => { return math.gcd(this.time_x_speed, val) > 2; })), this.time_x_speed);
    }

    get m():number {
        return this.m_plus_1 - 1;
    }    
    
    get tlen():number {
        return this.time_x_speed / this.m_plus_1;
    }

    get blen():number {
        return this.tlen * this.m;
    }

    get cans(): number {
        return this.time;
    }

    get qtxt() {
        return `Speed of a train is ${this.speed} m/s. If length of train is ${this.tlen} meter, how much time will it take to cross ${this.blen} meter bridge`
    }
}
