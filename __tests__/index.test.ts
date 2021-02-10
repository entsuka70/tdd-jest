import { multiply } from "../src/index";
import { add } from "../src/index";
import { subtract } from "../src/index";
import { divide } from "../src/index";
import { checkArgsNumber } from "../src/index";
import { checkNumberValue } from "../src/index";
import { checkMaxSumValue } from "../src/index";
import { checkNegativeValue } from "../src/index";
import { checkMaxMultiplyValue } from "../src/index";
import { checkDecimalNumber } from "../src/index";

describe('Let us FIRST TIME TDD !!', () => {
    it('check multiply function', () => {
        expect(multiply(3, 10, 3)).toBe(90);
    });

    it('check add function', () => {
        expect(add(3, 10, 3)).toBe(16);
    });

    it('check subtract function', () => {
        // 可変長引数の設定は、[]で引数を与えずに直接引数を入力
        expect(subtract(3, 10, 3)).toBe(-10);
    });

    it('check divide function', () => {
        // 可変長引数の設定は、[]で引数を与えずに直接引数を入力
        expect(divide(100, 10)).toBe(10);
    });

    it('check args length', () => {
        expect(checkArgsNumber(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,31)).toBeFalsy();
        expect(checkArgsNumber(1,2,3,4,5,6,7,8,9,10)).toBeUndefined();
    });

    it('check args style', () => {
        expect(checkNumberValue(1,2,3)).toBeUndefined();
        expect(checkNumberValue('a','b','c')).toBeFalsy();
        expect(checkNumberValue([])).toBeFalsy();
    });

    it('check max sum value', () => {
        expect(checkMaxSumValue(1000,1)).toMatch(/^too big/);
        expect(checkMaxSumValue(100,1)).toBeUndefined();
    });

    it('check negative value', () => {
        expect(checkNegativeValue(1,10)).toMatch(/^negative number/);
        expect(checkNegativeValue(10,1)).toBeUndefined();
    });

    it('check max multiply value', () => {
        expect(checkMaxMultiplyValue(200, 6)).toMatch(/^big big number/);
        expect(checkMaxMultiplyValue(200, 5)).toBeUndefined();
    });

    it('check decimal number', () => {
        expect(checkDecimalNumber(10/3)).toMatch(/^indivisible/);
        expect(checkDecimalNumber(10/4)).toBeUndefined();
    });
});