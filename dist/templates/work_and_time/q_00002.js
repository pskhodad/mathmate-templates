"use strict";
var chance = require('../../extlibs/wrap_chance');
var Question = (function () {
    function Question() {
        this.D_m = chance.natural({ min: 5, max: 25 });
        this.m = chance.natural({ min: 5, max: 25 });
    }
    Object.defineProperty(Question.prototype, "D_1", {
        get: function () {
            return this.m * this.D_m;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "cans", {
        get: function () {
            return this.D_m;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "qtxt", {
        get: function () {
            return "If one woman can finish a work in " + this.D_1 + " days, how many days " + this.m + " women will take";
        },
        enumerable: true,
        configurable: true
    });
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=q_00002.js.map