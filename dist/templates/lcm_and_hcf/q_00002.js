"use strict";
var chance = require('../../extlibs/wrap_chance');
var math = require('../../extlibs/wrap_math');
var _ = require('../../extlibs/wrap_lodash');
var Question = (function () {
    function Question() {
        this.width = chance.natural({ min: 5, max: 25 }) * 2;
    }
    Object.defineProperty(Question.prototype, "length", {
        get: function () {
            var _this = this;
            return chance.pickone(_.range(10, 50).filter(function (elem) { return math.gcd(elem, _this.width) > 1; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "side", {
        get: function () {
            return math.gcd(this.width, this.length);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "cans", {
        get: function () {
            return (this.width * this.length) / (math.pow(this.side, 2));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "qtxt", {
        get: function () {
            return "Minimum number of square shaped tiles of same dimensions required to pave a hall of " + this.width + " ft x " + this.length + " ft?";
        },
        enumerable: true,
        configurable: true
    });
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=q_00002.js.map