import chance = require('../../extlibs/wrap_chance');
import math = require('../../extlibs/wrap_math');
import { memoizeall } from '../../decorators/memoize';

@memoizeall
export class Question {

    E: number;
    D: number;
    W_div_D: number;
    m: number;
    n: number;
    
    constructor() {

        this.E = chance.natural({ min: 2, max: 3 });
        this.D = chance.natural({ min: 5, max: 25 });
        this.W_div_D = chance.natural({ min: 1, max: 3 }) * 20;
        this.m = chance.pickone([2, 4, 5, 10]); 
        this.n = chance.pickone([2, 4, 5, 10]);
    }

    get W() {
        return this.W_div_D * this.D;
    }

    get x() {
        return chance.natural({ min: 5, max: (this.W_div_D - 2) });
    }

    get y() {
        return this.E * (this.W_div_D - this.x);
    }

    get W_m() {
        return this.W / this.m;
    }

    get W_1() {
        return this.W;
    }

    get C_1() {
        return this.E * this.W;
    }

    get C_n() {
        return this.C_1 / this.n;
    }

    get cans() {
        return this.D;
    }

    get qtxt() {
        return `${this.m} women can finish a work in ${this.W_m} hours. Its takes ${this.C_n} hours for ${this.n} children to finish the same work. If ${this.x} women and ${this.y} children are working together, how many hours will it take to finish the work?`
    }
}
