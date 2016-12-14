"use strict";
var chance = require('../../extlibs/wrap_chance');
var Question = (function () {
    function Question() {
        this.num = chance.natural({ min: 91, max: 109 });
    }
    Object.defineProperty(Question.prototype, "cans", {
        get: function () {
            return this.num * this.num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "qtxt", {
        get: function () {
            return "$$ " + this.num + "^2 $$";
        },
        enumerable: true,
        configurable: true
    });
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=q_00002.js.map