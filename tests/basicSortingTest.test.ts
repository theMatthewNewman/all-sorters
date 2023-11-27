import { selectionSort, bubbleSort } from "../src";

const unsortedArray = [ 5, 3, 4, 8, 6, 9, 10, 1, 3, 2, 9, 8, 7, 5 ]
const sortedArray = [ 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 8, 9, 9, 10 ]

test('basic test of selectionSort', () => {
    expect(selectionSort(unsortedArray)).toStrictEqual(sortedArray);
});

test('basic test of bubbleSort', () => {
    expect(bubbleSort(unsortedArray)).toStrictEqual(sortedArray);
});