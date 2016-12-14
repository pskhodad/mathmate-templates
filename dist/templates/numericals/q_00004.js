"use strict";
var chance = require('../../extlibs/wrap_chance');
var Question = (function () {
    function Question() {
        this.num1 = chance.natural({ min: 1, max: 8 }) * 10;
        this.num2 = chance.natural({ min: 1, max: 4 });
    }
    Object.defineProperty(Question.prototype, "num3", {
        get: function () {
            return this.num1 + this.num2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "num4", {
        get: function () {
            return this.num1 + 10 - this.num2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "cans", {
        get: function () {
            return this.num3 * this.num4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "qtxt", {
        get: function () {
            return "$$ " + this.num3 + " \\times " + this.num4 + " $$";
        },
        enumerable: true,
        configurable: true
    });
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=q_00004.js.map