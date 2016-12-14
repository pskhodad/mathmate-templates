"use strict";
var chance = require('../../extlibs/wrap_chance');
var Question = (function () {
    function Question() {
        this.x = chance.natural({ min: 5, max: 25 });
        this.y = chance.natural({ min: 5, max: 25 });
    }
    Object.defineProperty(Question.prototype, "cans", {
        get: function () {
            return (this.x * this.x) - (2 * this.x * this.y) + (this.y * this.y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "qtxt", {
        get: function () {
            return "$$ " + this.x + " \\times " + this.x + " - 2 \\times " + this.x + " \\times " + this.y + " + " + this.y + " \\times " + this.y + " $$";
        },
        enumerable: true,
        configurable: true
    });
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=q_00008.js.map