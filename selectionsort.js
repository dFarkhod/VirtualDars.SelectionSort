function selectionSort(arr) {
    let length = arr.length;
    for(let i = 0; i < length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex != i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

const array = [7, 2, 1, 5, 3, 9];
console.log('Tartiblanmagan qator:' + array);
selectionSort(array);
console.log('Tartiblangan qator:' + array);