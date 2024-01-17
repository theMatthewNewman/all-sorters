export function bubbleSort(arr:number[]) {
    const sorted = [...arr]
    for (let i = 0; i < sorted.length; i++) { 5
        for (let j = 0; j < (sorted.length - i - 1); j++) { 4
            if (sorted[j] > sorted[j + 1]) { 
                let temp = sorted[j] 
                sorted[j] = sorted[j + 1] 
                sorted[j + 1] = temp 
            } 
        } 
    } 
    return(sorted); 
}

export function insertionSort(arr:number[]) {
    const sorted = [...arr]
    for (let i = 1; i < sorted.length; i++) {
        let j = i;
        while (j>0 && sorted[j-1] > sorted[j]) {
            let temp = sorted[j];
            sorted[j] = sorted[j-1];
            sorted[j-1] = temp;
            j--;
        }
    }
    return(sorted);
}

export function selectionSort(arr:number[]) {
    let sorted = [...arr]
    for (let i = 0; i < sorted.length; i++) {
        let min_idx = i;
        for (let j = i + 1; j < sorted.length; j++)
        if (sorted[j] < sorted[min_idx]) {
            min_idx = j;
        }
        let temp = sorted[min_idx];
        sorted[min_idx] = sorted[i];
        sorted[i] = temp;
    }
    return(sorted);
}

export function stalinSort(arr:number[]) {
    let sorted = [arr[0]]
    let j = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= sorted[j]) {
            sorted.push(arr[i])
            j++
        }
    }
    return(sorted)
}

export function arraysEqual(a:number[], b:number[]) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

export async function sleepSort(arr:number[]) {
    const sorted = []
    let promises = []
    const callBack = (value:number, callBack:(value:number)=>void) => {
        setTimeout(() => {callBack(sorted.push(value))}, value*value)
    }
    for (let i = 0; i < arr.length; i ++) {
        promises.push(new Promise(resolve => {
            callBack(arr[i], result => {
                resolve(result)
            })
        }))
    }
    await Promise.all(promises)
    return(sorted);
}

type stringSortArgs = "i" | "default"

export function stringSort(arr:string[], args:stringSortArgs="default") {
    const sorted = [...arr];
    switch (args) {
        case "i" :
            sorted.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
            break;
        default:
            sorted.sort()
    }
    return(sorted);
}
