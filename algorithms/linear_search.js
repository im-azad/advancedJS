
function linearSearch(arr, target) {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // If the current element is equal to the target, return its index
        if (arr[i] === target) {
            return i;
        }
    }

    // If target is not found, return -1
    return -1;
}

// Example usage:
let arr = [5, 3, 8, 4, 2];
let target = 4;
console.log("Target found at index:", linearSearch(arr, target));

