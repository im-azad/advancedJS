function bubbleSort(arr) {
    let n = arr.length;

    // Outer loop: Controls the number of passes
    for (let i = 0; i < n - 1; i++) {
        // Inner loop: Goes through the array, up to the point where sorting is done
        for (let j = 0; j < n - i - 1; j++) {
            // If the current element is greater than the next element, swap them
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr; // Return the sorted array
}

// Example usage:
let arr = [5, 3, 8, 4, 2];
console.log("Sorted array with Bubble Sort:", bubbleSort(arr));
