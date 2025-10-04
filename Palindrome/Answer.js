/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    // handle negative number
    if( x < 0){
        return false;
    }

    // copy of original x
    let xCopy = x;

    // reverse
    let reverse = 0;

    while(x > 0){
        reminder = x % 10;
        reverse = (10 * reverse) + reminder;
        x = Math.floor(x / 10);
    }

    if(xCopy === reverse){
        return true;
    } else{
        return false
    }
};