export const multiply = (numbers:number[]):number => {
    return numbers.reduce((a: number, b:number):number => a * b);
};