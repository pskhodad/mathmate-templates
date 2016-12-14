"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var chance = require('../../extlibs/wrap_chance');
var memoize_1 = require('../../decorators/memoize');
var Question = (function () {
    function Question() {
        this.E = chance.natural({ min: 2, max: 3 });
        this.D = chance.natural({ min: 5, max: 25 });
        this.W_div_D = chance.natural({ min: 1, max: 3 }) * 20;
        this.m = chance.pickone([2, 4, 5, 10]);
        this.n = chance.pickone([2, 4, 5, 10]);
    }
    Object.defineProperty(Question.prototype, "W", {
        get: function () {
            return this.W_div_D * this.D;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "x", {
        get: function () {
            return chance.natural({ min: 5, max: (this.W_div_D - 2) });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "y", {
        get: function () {
            return this.E * (this.W_div_D - this.x);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "W_m", {
        get: function () {
            return this.W / this.m;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "cans", {
        get: function () {
            return (this.E * this.W);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "qtxt", {
        get: function () {
            return this.x + " women and " + this.y + " children together take " + this.D + " hours to complete a piece of work. If " + this.m + " women take " + this.W_m + " hours to complete the work, how many hours " + this.n + " children will take";
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        memoize_1.memoize
    ], Question.prototype, "x", null);
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=q_00001.js.map