function bubbleSort(array) {
    let n = array.length;
    let swap;

    do {
        swap = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swap = true;
            }
        }
        n--;
    } while (swap);

    return array;
}

let numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Початковий масив:", numbers);

let sortedNumbers = bubbleSort(numbers);
console.log("Відсортований масив:", sortedNumbers);
