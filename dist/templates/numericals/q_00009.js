"use strict";
var chance = require('../../extlibs/wrap_chance');
var math = require('../../extlibs/wrap_math');
var Question = (function () {
    function Question() {
        this.xpow = chance.natural({ min: 2, max: 3 });
        this.zpow = chance.natural({ min: 2, max: 3 });
        this.x = chance.natural({ min: 5, max: 10 });
        this.y = chance.natural({ min: 5, max: 15 });
    }
    Object.defineProperty(Question.prototype, "z", {
        get: function () {
            return this.x + this.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "zn", {
        get: function () {
            return math.pow(this.z, this.zpow);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "cans", {
        get: function () {
            return math.pow(this.x, this.xpow);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "qtxt", {
        get: function () {
            return "$$ \\sqrt[" + this.xpow + "]{X}+" + this.y + " = \\sqrt[" + this.zpow + "]{" + this.zn + "} $$, value of $$ X $$ is";
        },
        enumerable: true,
        configurable: true
    });
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=q_00009.js.map