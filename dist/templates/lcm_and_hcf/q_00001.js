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
        this.nplayers = chance.natural({ min: 2, max: 4 });
    }
    Object.defineProperty(Question.prototype, "ts", {
        get: function () {
            return chance.n(chance.natural, this.nplayers, { min: 5, max: 30 });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "names", {
        get: function () {
            return chance.unique(chance.first, this.nplayers, { comparator: function (arr, val) { return arr.indexOf(val) !== -1; } });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "cans", {
        get: function () {
            return math.lcm.apply(null, this.ts);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "qtxt", {
        get: function () {
            return this.names + " start running around a circular stadium and complete one round in " + this.ts + " seconds respectively. In how much time will they meet at starting point again?";
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
//# sourceMappingURL=q_00001.js.map