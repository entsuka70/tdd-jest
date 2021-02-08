"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = void 0;
var multiply = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (a, b) { return a * b; });
};
exports.multiply = multiply;
var readline = require('readline-sync');
readline.promptCLLoop({
    mCalc: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(exports.multiply.apply(void 0, args));
        return exports.multiply.apply(void 0, args);
    }
});
