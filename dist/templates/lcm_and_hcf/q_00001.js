"use strict";
var chance = require('../../extlibs/wrap_chance');
var math = require('../../extlibs/wrap_math');
var Question = (function () {
    function Question() {
        this.nplayers = chance.natural({ min: 2, max: 4 });
        this.ts = chance.n(chance.natural, this.nplayers, { min: 5, max: 30 });
        this.names = chance.unique(chance.first, this.nplayers, { comparator: function (arr, val) { return arr.indexOf(val) !== -1; } });
    }
    Object.defineProperty(Question.prototype, "cans", {
        get: function () {
            return math.lcm.apply(null, this.ts);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "qtxt", {
        get: function () {
            return this.names + " start running around a circular stadium and complete one round in " + this.ts + " seconds respectively. In how much time will they meet at starting point again?";
        },
        enumerable: true,
        configurable: true
    });
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=q_00001.js.map