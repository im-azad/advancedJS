
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        // Calculate mid index
        const mid = Math.floor((low + high) / 2);
        const guess = arr[mid];

        // Check if the middle element is the target
        if (guess === target) {
            return mid;
        }

        // If the target is less than the middle element, search the left half
        if (guess > target) {
            high = mid - 1;
        }
        // If the target is greater than the middle element, search the right half
        else {
            low = mid + 1;
        }
    }

    // If the target is not found, return -1
    return -1;
}

// Example usage:
let sortedArr = [2, 3, 4, 5, 8];
let targetValue = 4;
console.log("Target found at index:", binarySearch(sortedArr, targetValue));

