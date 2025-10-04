// Write a function that returns the count of digit in a number:
// Corner Case 1 --> 0 Means handle 1 digit:
// Corner Case 2 --> Handle Negative Number 

let n = 8248572282;

function countDigits(n){

    // 0 Means Return 1 Digit
    if (n == 0) {
        return 1
    }

    // Converting Negative Digit to Postive Digit
    n = Math.abs(n);

    let count = 0;

    while(n > 0){

        n = Math.floor(n / 10);
        count = count + 1;
    }
    return count
}

let result = countDigits(n);
console.log(result);

// Output ---> 10