let numbersArray = [1,2,3,4,5,6,7,8,9,10];


numbersArray.filter(function(number) { // callback function 
    return number % 2 !== 0;
});

function getOddNumbers(numbers, callback) {
    let oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            oddNumbers.push(numbers[i]);
        }
    }
    callback(oddNumbers);
}