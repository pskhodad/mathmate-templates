"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var chance = require('../../extlibs/wrap_chance');
var math = require('../../extlibs/wrap_math');
var memoize_1 = require('../../decorators/memoize');
var Question = (function () {
    function Question() {
        this.ss = chance.natural({ min: 1, max: 10 });
    }
    Object.defineProperty(Question.prototype, "bs", {
        get: function () {
            var lbs = chance.natural({ min: 11, max: 20 });
            if ((lbs % 2) && !(this.ss % 2)) {
                lbs += 1;
            }
            return lbs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "ds", {
        get: function () {
            return this.bs + this.ss;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "us", {
        get: function () {
            return this.bs - this.ss;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "dist", {
        get: function () {
            return math.lcm(this.us, this.ds) * chance.natural({ min: 2, max: 5 });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "ut", {
        get: function () {
            return this.dist / this.us;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "dt", {
        get: function () {
            return this.dist / this.ds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "cans", {
        get: function () {
            return this.ss;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "qtxt", {
        get: function () {
            return "A boat travels to village upstream in " + this.ut + " hrs. It comes back downstream in " + this.dt + " hrs. If speed of boat in still water is " + this.bs + " km/hr, speed of the stream in km/hr is";
        },
        enumerable: true,
        configurable: true
    });
    Question = __decorate([
        memoize_1.memoizeall
    ], Question);
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=q_00007.js.map