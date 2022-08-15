//bubble sort

// const bubbleSort = (array) => {
//     const length = array.length;
//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length; j++) {
//             if (array[j] > array[j+1]) {
//                 var temp = array[j]
//                 array[j] = array[j + 1]
//                 array[j+1] = temp
//             }
//         }
//     }

//     return array
// }

// console.log(bubbleSort([2, 1, 4]));


// const selectionSort = (a) => {
//     const length = a.length;
//     for (let i = 0; i < length; i++) {
//         let minValue = i;
//         for (let j = i+1; j < length; j++) {
//             if (a[j] < a[minValue]) {
//                 minValue = j;
//             }
//         }
//         var temp = a[i];
//         a[i] = a[minValue];
//         a[minValue] = temp;
//     }

//     return a
// }

// console.log(selectionSort([2, 1, 4]));

const insertSort = (a) => {
    const length = a.length;
    for (let i = 1; i < length; i++) {
        
        const key = a[i];
        j = i - 1;

        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            j = j - 1;
        }

        a[j+1] = key;
    }

    return a
}

console.log(insertSort([2, 1, 4]));