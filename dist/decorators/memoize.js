"use strict";
function memoize(target, name, descriptor) {
    var getter = descriptor.get;
    descriptor.get = function () {
        return this["_" + name] =
            this["_" + name] ? this["_" + name] : getter.call(this);
    };
}
exports.memoize = memoize;
function memoizeall(target) {
    var qkeys = Object.keys(target.prototype);
    qkeys.forEach(function (value) {
        var descriptor = Object.getOwnPropertyDescriptor(target.prototype, value);
        var getter = descriptor.get;
        Object.defineProperty(target.prototype, value, {
            get: function () {
                if (false === this.hasOwnProperty("_" + value)) {
                    this["_" + value] = getter.call(this);
                }
                return this["_" + value];
            },
            enumerable: false,
            configurable: false
        });
    });
    return target;
}
exports.memoizeall = memoizeall;
//# sourceMappingURL=memoize.js.map