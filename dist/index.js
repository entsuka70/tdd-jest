"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkNegativeValue = exports.checkMaxSumValue = exports.checkNumberValue = exports.checkArgsNumber = exports.divide = exports.subtract = exports.add = exports.multiply = void 0;
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
var checkArgsNumber = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length > 30) {
        console.log(args.length + " : too long");
        return false;
    }
    console.log(args.length + " : not long");
};
exports.checkArgsNumber = checkArgsNumber;
var checkNumberValue = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (element) {
        if (typeof element !== 'number') {
            console.log(element + " : Not number(" + typeof element + ")");
            return false;
        }
        console.log(element + " : Is number");
    });
};
exports.checkNumberValue = checkNumberValue;
var checkMaxSumValue = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // 【疑問点】
    // 足し算を合計するのに、合算するaddメソッドと同じ処理をする必要がある
    // ①addメソッド内で条件分岐 ②別にメソッドを作成してそこで判定(但しaddメソッドと同様な書き方をここでも行う)
    var sum = args.reduce(function (a, b) { return Number(a) + Number(b); });
    if (sum > 1000) {
        console.log("sum is " + sum + " too big");
        return 'too big';
    }
    console.log("sum is " + sum);
};
exports.checkMaxSumValue = checkMaxSumValue;
var checkNegativeValue = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = args.reduce(function (a, b) { return a - b; });
    if (sum < 0) {
        console.log("sum is " + sum + " NEGATIVE");
        return 'negative number';
    }
    console.log('sum is not negative');
};
exports.checkNegativeValue = checkNegativeValue;
var readline = require('readline-sync');
readline.promptCLLoop({
    mCalc: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, args);
        console.log(exports.multiply.apply(void 0, args));
        exports.checkNumberValue.apply(void 0, args);
        exports.checkArgsNumber.apply(void 0, args);
        return exports.multiply.apply(void 0, args);
    },
    aCalc: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, args);
        console.log(exports.add.apply(void 0, args));
        exports.checkMaxSumValue.apply(void 0, args);
        return exports.add.apply(void 0, args);
    },
    sCalc: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, args);
        console.log(exports.subtract.apply(void 0, args));
        exports.checkNegativeValue.apply(void 0, args);
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
