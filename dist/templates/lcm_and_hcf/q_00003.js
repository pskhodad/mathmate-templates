"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var chance = require('../../extlibs/wrap_chance');
var math = require('../../extlibs/wrap_math');
var _ = require('../../extlibs/wrap_lodash');
var memoize_1 = require('../../decorators/memoize');
var Question = (function () {
    function Question() {
        this.n1 = chance.natural({ min: 5, max: 25 }) * 2;
    }
    Object.defineProperty(Question.prototype, "n2", {
        get: function () {
            var _this = this;
            return chance.pickone(_.range(10, 50).filter(function (elem) { return math.gcd(elem, _this.n1) > 1; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "cans", {
        get: function () {
            return math.gcd(this.n1, this.n2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "qtxt", {
        get: function () {
            return "GCD of " + this.n1 + " and " + this.n2;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        memoize_1.memoize
    ], Question.prototype, "n2", null);
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=q_00003.js.map