/**
 * MathMateTemplates v0.1.0
 * (c) 2016 Prashant S Khodade
 * @license MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

var Question = (function () {
    function Question() {
        this.num = (chance.natural({ min: 1, max: 10 }) * 10) + 5;
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

var Question$1 = (function () {
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

var Question$2 = (function () {
    function Question() {
        this.num = chance.natural({ min: 41, max: 59 });
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

var Question$3 = (function () {
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

var Question$4 = (function () {
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

var Question$5 = (function () {
    function Question() {
        this.num = chance.natural({ min: 20, max: 20000 });
    }
    Object.defineProperty(Question.prototype, "avg", {
        get: function () {
            return this.num + 0.5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "cans", {
        get: function () {
            return this.num + 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "qtxt", {
        get: function () {
            return "Average of 4 consecutive numbers is " + this.avg + ", largest number is ";
        },
        enumerable: true,
        configurable: true
    });
    return Question;
}());

var Question$6 = (function () {
    function Question() {
        this.num = chance.natural({ min: 20, max: 20000 }) * 2;
    }
    Object.defineProperty(Question.prototype, "avg", {
        get: function () {
            return this.num + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "cans", {
        get: function () {
            return this.num - 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "qtxt", {
        get: function () {
            return "Average of 4 consecutive even numbers is " + this.avg + ", smallest number is ";
        },
        enumerable: true,
        configurable: true
    });
    return Question;
}());

var Question$7 = (function () {
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

var Question$8 = (function () {
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

var q = new Question$8();
console.log(q.qtxt);
console.log(q.cans);

})));
