export const multiply = (...args: number[]): number => {
    return args.reduce((a: number, b:number): number => a * b);
};

export const add = (...args: number[]): number => {
    // 【ポイント】
    // 可変長引数は指定型の配列として格納する
    // 【疑問点】
    // Number()で数値型に変換しないと文字列型として認識され、引数が結合される
    return args.reduce((a: number, b: number): number => Number(a) + Number(b));
};

export const subtract = (...args: number[]): number => {
    return args.reduce((a: number, b: number): number => a - b);
};

export const divide = (...args: number[]): number => {
    return args.reduce((a: number, b: number): number => a / b);
};

export const checkArgsNumber = (...args: number[]):boolean|void => {
    if (args.length > 30) {
        console.log(`${args.length} : too long`);
        return false;
    }
    console.log(`${args.length} : not long`);
};

export const checkNumberValue = (...args: any[]):boolean|void => {
    args.forEach( element => {
        if (typeof element !== 'number') {
            console.log(`${element} : Not number(${typeof element})`);
            return false;
        }
        console.log(`${element} : Is number`);
    });
};

export const checkMaxSumValue = (...args: number[]):string|void => {
    // 【疑問点】
    // 足し算を合計するのに、合算するaddメソッドと同じ処理をする必要がある
    // ①addメソッド内で条件分岐 ②別にメソッドを作成してそこで判定(但しaddメソッドと同様な書き方をここでも行う)
    let sum = args.reduce((a: number, b: number): number => Number(a) + Number(b));
    if (sum > 1000) {
        console.log(`sum is ${sum} too big`);
        return 'too big';
    }
    console.log(`sum is ${sum}`);
};

const readline = require('readline-sync');
readline.promptCLLoop({
    mCalc: function(...args: number[]) {
        console.log(...args);
        console.log(multiply(...args));
        checkNumberValue(...args);
        checkArgsNumber(...args);
        return multiply(...args);
    },
    aCalc: function(...args: number[]): number {
        console.log(...args);
        console.log(add(...args));
        checkMaxSumValue(...args);
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