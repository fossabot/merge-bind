'use strict';

/**
 * Given the function `func` that takes an object of options as the first argument,
 * and the default options object, generate a function with the defaults "pre-bound".
 * When called, the first argument passed to the function `func` will be supplemented
 * with the defaults.
 *
 * @param {Function} func
 * @param {Object} [defaults = {}]
 * @returns {Function}
 */
module.exports = (func, defaults = {}) => {
    return (options, ...args) => {
        return func(Object.assign({}, defaults, options), ...args);
    };
};