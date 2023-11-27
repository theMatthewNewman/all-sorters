function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) { 
        for (let j = 0; j < (arr.length - i - 1); j++) { 
            if (arr[j] > arr[j + 1]) { 
                let temp = arr[j] 
                arr[j] = arr[j + 1] 
                arr[j + 1] = temp 
            } 
        } 
    } 
    return(arr); 
}

function selectionSort(arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        let min_idx = i;
        for (let j = i + 1; j < arr.length; j++)
        if (arr[j] < arr[min_idx]) {
            min_idx = j;
        }
        swap(arr,min_idx, i);
        let temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

exports.bubbleSort = bubbleSort;
exports.selectionSort = selectionSort;