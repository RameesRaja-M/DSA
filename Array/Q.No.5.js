// Find the Smallest Number in an Array

let array = [10,20,30,40,50]

function findSmallest (array){
    let smallest = Infinity
    for(let i = 0; i < array.length; i++){
        if (array[i] < smallest) {
            smallest = array[i]
        }
    }
    return smallest
}

let result = findSmallest(array)
console.log("Smallest Number is : " + result);
