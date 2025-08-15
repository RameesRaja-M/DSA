// Find the Largest Number in Array

let array = [10,20,30,40,50]

function findLargest (array){
    let largest = -Infinity
    for(let i = 0; i < array.length; i++){
        if (array[i] > largest) {
            largest = array[i]
        }
    }
    return largest
}

let result = findLargest(array)
console.log("Largest Number is : " + result);

// Output --> 50
