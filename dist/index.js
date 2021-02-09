"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = exports.subtract = exports.add = exports.multiply = void 0;
var multiply = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (a, b) { return a * b; });
};
exports.multiply = multiply;
var add = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // 【ポイント】
    // 可変長引数は指定型の配列として格納する
    // 【疑問点】
    // Number()で数値型に変換しないと文字列型として認識され、引数が結合される
    return args.reduce(function (a, b) { return Number(a) + Number(b); });
};
exports.add = add;
var subtract = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (a, b) { return a - b; });
};
exports.subtract = subtract;
var divide = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (a, b) { return a / b; });
};
exports.divide = divide;
var readline = require('readline-sync');
readline.promptCLLoop({
    mCalc: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, args);
        console.log(exports.multiply.apply(void 0, args));
        return exports.multiply.apply(void 0, args);
    },
    aCalc: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, args);
        console.log(exports.add.apply(void 0, args));
        return exports.add.apply(void 0, args);
    },
    sCalc: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, args);
        console.log(exports.subtract.apply(void 0, args));
        return exports.subtract.apply(void 0, args);
    },
    dCalc: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, args);
        console.log(exports.divide.apply(void 0, args));
        return exports.divide.apply(void 0, args);
    },
});
