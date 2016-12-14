"use strict";
function memoize(target, name, descriptor) {
    var getter = descriptor.get;
    descriptor.get = function () {
        return this["_" + name] =
            this["_" + name] ? this["_" + name] : getter.call(this);
    };
}
exports.memoize = memoize;
//# sourceMappingURL=memoize.js.map