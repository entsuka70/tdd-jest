import { multiply } from "../src/index";
import { add } from "../src/index";
import { subtract } from "../src/index";
import { divide } from "../src/index";

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
});