"use strict";
var chance = require('../../extlibs/wrap_chance');
var Question = (function () {
    function Question() {
        this.num = chance.natural({ min: 1, max: 98 });
    }
    Object.defineProperty(Question.prototype, "cans", {
        get: function () {
            return this.num * 99;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "qtxt", {
        get: function () {
            return "$$ " + this.num + " \\times 99 $$";
        },
        enumerable: true,
        configurable: true
    });
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=q_00005.js.map