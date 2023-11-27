import {selectionSort} from "../src/index";

test('basic test of selectionSort', () => {
    expect(selectionSort([6,5,7,3,2,9])).toStrictEqual([2,3,5,6,7,9]);
});