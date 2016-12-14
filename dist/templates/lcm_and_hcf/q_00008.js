"use strict";
var chance = require('../../extlibs/wrap_chance');
var math = require('../../extlibs/wrap_math');
var Question = (function () {
    function Question() {
        this.f1 = math.fraction(chance.natural({ min: 5, max: 25 }), chance.natural({ min: 5, max: 25 }));
        this.f2 = math.fraction(chance.natural({ min: 5, max: 25 }), chance.natural({ min: 5, max: 25 }));
    }
    Object.defineProperty(Question.prototype, "cans", {
        get: function () {
            return math.lcm(this.f1, this.f2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "cans_fmt", {
        get: function () {
            return "" + math.format(this.cans, 14);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "qtxt", {
        get: function () {
            return "LCM of " + math.format(this.f1, 14) + " and " + math.format(this.f2, 14);
        },
        enumerable: true,
        configurable: true
    });
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=q_00008.js.map