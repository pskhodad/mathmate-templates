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
        this.time = chance.natural({ min: 5, max: 25 }) * 2;
        this.speed = chance.natural({ min: 5, max: 25 }) * 2;
    }
    Object.defineProperty(Question.prototype, "time_x_speed", {
        get: function () {
            return this.time * this.speed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "m_plus_1", {
        get: function () {
            var _this = this;
            return math.gcd(chance.pickone(_.range(3, 16).filter(function (val) { return math.gcd(_this.time_x_speed, val) > 2; })), this.time_x_speed);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "m", {
        get: function () {
            return this.m_plus_1 - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "tlen", {
        get: function () {
            return this.time_x_speed / this.m_plus_1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "blen", {
        get: function () {
            return this.tlen * this.m;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "cans", {
        get: function () {
            return this.time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "qtxt", {
        get: function () {
            return "Speed of a train is " + this.speed + " m/s. If length of train is " + this.tlen + " meter, how much time will it take to cross " + this.blen + " meter bridge";
        },
        enumerable: true,
        configurable: true
    });
    Question = __decorate([
        memoize_1.memoizeall
    ], Question);
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=q_00003.js.map