"use strict";
var chance = require('../../extlibs/wrap_chance');
var Question = (function () {
    function Question() {
        this.num = chance.natural({ min: 20, max: 20000 }) * 2;
    }
    Object.defineProperty(Question.prototype, "avg", {
        get: function () {
            return this.num + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "cans", {
        get: function () {
            return this.num - 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "qtxt", {
        get: function () {
            return "Average of 4 consecutive even numbers is " + this.avg + ", smallest number is ";
        },
        enumerable: true,
        configurable: true
    });
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=q_00007.js.map