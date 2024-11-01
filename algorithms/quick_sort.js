function quickSort(arr) {
    // Base case: If the array has one or zero elements, it's already sorted
    if (arr.length <= 1) return arr;

    // Choose the first element as the pivot
    const pivot = arr[0];
    // Create empty arrays for elements less than and greater than the pivot
    const left = [];
    const right = [];

    // Loop through the array, starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Place element in the left array if it's smaller than pivot, otherwise in right array
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort the left and right subarrays, then combine them with the pivot
    return quickSort(left).concat(pivot, quickSort(right));
}

// Example usage:
let arr2 = [5, 3, 8, 4, 2];
console.log("Sorted array with Quick Sort:", quickSort(arr2));
