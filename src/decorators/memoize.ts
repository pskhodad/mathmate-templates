export function memoize(target, name, descriptor) {
    let getter = descriptor.get;
    descriptor.get = function() {
        return this["_" + name] = 
            this["_" + name] ? this["_" + name] : getter.call(this);
    }
}
