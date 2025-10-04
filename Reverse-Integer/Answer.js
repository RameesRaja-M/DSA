/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    // Copy of Original
    let xCopy = x;

    let reverse = 0;

    // Handle Negative Number
     x = Math.abs(x);

    while(x > 0){
       let lastDigit = x % 10;
       reverse = (10 * reverse) + lastDigit;
       x = Math.floor(x / 10); 
    }

    // Handle 32 bit
    let limit = Math.pow(2,31);
    if(reverse < -limit || reverse > limit){
        return 0;
    }

    if(xCopy < 0){
        return -reverse;
    } else {
        return reverse;
    }
}