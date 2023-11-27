function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return (arr);
}
function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var min_idx = i;
        for (var j = i + 1; j < arr.length; j++)
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        var temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
    return (arr);
}
exports.bubbleSort = bubbleSort;
exports.selectionSort = selectionSort;
//# sourceMappingURL=index.js.map
