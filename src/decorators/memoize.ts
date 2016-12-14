export function memoize(target, name, descriptor) {
    let getter = descriptor.get;
    descriptor.get = function() {
        return this["_" + name] = 
            this["_" + name] ? this["_" + name] : getter.call(this);
    }
}

export function memoizeall(target: any) {

    let qkeys = Object.keys(target.prototype);

    qkeys.forEach((value) => {

        let descriptor = Object.getOwnPropertyDescriptor(target.prototype, value);
        let getter = descriptor.get;

        Object.defineProperty(target.prototype, value, {
            get: function() {
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
