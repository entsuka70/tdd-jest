export const multiply = (...args: number[]): number => {
    return args.reduce((a: number, b:number): number => a * b);
};

const readline = require('readline-sync');
readline.promptCLLoop({
    mCalc: function(...args: number[]) {
        console.log(multiply(...args));
        return multiply(...args);
    }
});