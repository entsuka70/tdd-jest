export const multiply = (...args: number[]): number => {
    return args.reduce((a: number, b:number): number => a * b);
};

export const add = (...args: number[]): number => {
    // 【ポイント】
    // 可変長引数は指定型の配列として格納する
    // 【疑問点】
    // Number()で数値型に変換しないと文字列型として認識され、引数が結合される
    return args.reduce((a: number, b: number): number => Number(a) + Number(b));
}

export const subtract = (...args: number[]): number => {
    return args.reduce((a: number, b: number): number => a - b);
}

export const divide = (...args: number[]): number => {
    return args.reduce((a: number, b: number): number => a / b);
}

export const checkArgsNumber = (...args: number[]):boolean|void => {
    if (args.length > 30) {
        console.log('too long');
        return false;
    }
    console.log('not long');
}

const readline = require('readline-sync');
readline.promptCLLoop({
    mCalc: function(...args: number[]) {
        console.log(...args);
        console.log(multiply(...args));
        checkArgsNumber(...args);
        return multiply(...args);
    },
    aCalc: function(...args: number[]): number {
        console.log(...args);
        console.log(add(...args));
        return add(...args);
    },
    sCalc: function(...args: number[]): number {
        console.log(...args);
        console.log(subtract(...args));
        return subtract(...args);
    },
    dCalc: function(...args: number[]): number {
        console.log(...args);
        console.log(divide(...args));
        return divide(...args);
    },
});