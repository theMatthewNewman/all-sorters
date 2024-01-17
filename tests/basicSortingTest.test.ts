import { selectionSort, bubbleSort, stalinSort, sleepSort, insertionSort } from "../src";

const unMutatedArray = [ 5, 3, 4, 8, 6, 9, 10, 1, 3, 2, 9, 8, 7, 5 ]

const unsortedArray = [ 5, 3, 4, 8, 6, 9, 10, 1, 3, 2, 9, 8, 7, 5 ]
const sortedArray = [ 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 8, 9, 9, 10 ]
const cutArray = [ 5, 8, 9, 10 ]

test('dumbo test', () => {
    expect(unsortedArray).toStrictEqual(unMutatedArray)
})

test('basic test of selectionSort', () => {
    expect(selectionSort(unsortedArray)).toStrictEqual(sortedArray);
    expect(unsortedArray).toStrictEqual(unMutatedArray);
});

test('basic test of bubbleSort', () => {
    expect(bubbleSort(unsortedArray)).toStrictEqual(sortedArray);
    expect(unsortedArray).toStrictEqual(unMutatedArray);
});

test('basic test of stalinSort', () => {
    expect(stalinSort(unsortedArray)).toStrictEqual(cutArray);
    expect(unsortedArray).toStrictEqual(unMutatedArray);
});

test('basic test of sleepSort', async() => {
    expect(await sleepSort(unsortedArray)).toStrictEqual(sortedArray);
    expect(unsortedArray).toStrictEqual(unMutatedArray);
});

test('basic test of insertionSort', () => {
    expect(insertionSort(unsortedArray)).toStrictEqual(sortedArray);
    expect(unsortedArray).toStrictEqual(unMutatedArray);
});
