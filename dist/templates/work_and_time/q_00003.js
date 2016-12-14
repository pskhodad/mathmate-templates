"use strict";
var chance = require('../../extlibs/wrap_chance');
var Question = (function () {
    function Question() {
        this.D_m = chance.natural({ min: 5, max: 25 });
        this.m = chance.natural({ min: 5, max: 25 });
    }
    Object.defineProperty(Question.prototype, "cans", {
        get: function () {
            return this.D_m * this.m;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "qtxt", {
        get: function () {
            return "If " + this.m + " women take " + this.D_m + " days to finish a work, how many days one woman will take";
        },
        enumerable: true,
        configurable: true
    });
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=q_00003.js.map