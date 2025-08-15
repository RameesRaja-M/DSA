// Count the Negative Number in an Array

let array = [10,-20,30,-40,50]

function countNegativeNumber (array){
    let count = 0
    for(let i = 0; i < array.length; i++){
        if (array[i] < 0) {
            count = count + 1
        }
    }
    return count
}

let result = countNegativeNumber(array)
console.log(result);

// Output -> 2
