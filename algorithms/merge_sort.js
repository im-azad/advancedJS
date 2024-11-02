
// Main Merge Sort function
function mergeSort(arr) {
    // Base case: If the array has one or zero elements, it's already sorted
    if (arr.length <= 1) return arr;

    // Find the middle index
    const middle = Math.floor(arr.length / 2);
    // Split the array into two halves
    const left = arr.slice(0, middle); // left half
    const right = arr.slice(middle);   // right half

    // Recursively split and merge the two halves
    return merge(mergeSort(left), mergeSort(right));
}

// Merge function: merges two sorted arrays into one sorted array
function merge(left, right) {
    let result = []; // Result array to store the sorted elements
    let leftIndex = 0;  // Pointer for the left array
    let rightIndex = 0; // Pointer for the right array

    // Compare elements from the left and right arrays and add the smaller one to the result
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]); // Add the smaller element from the left array
            leftIndex++; // Move the left pointer
        } else {
            result.push(right[rightIndex]); // Add the smaller element from the right array
            rightIndex++; // Move the right pointer
        }
    }

    // Concatenate any remaining elements from the left and right arrays
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Example usage:
let arr = [5, 3, 8, 4, 2];
console.log("Sorted array with Merge Sort:", mergeSort(arr));

