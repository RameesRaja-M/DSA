// Find the Second Largest Number in an Array

let array = [10,20,30,40,50,50]

function findSecondLargest(array){

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    if (array.length < 2 ) {
        return "Array Must Have 2 Values"
    }

    for( let i = 0; i < array.length; i++){

        if (array[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = array[i]
        } else if (array[i] > secondLargest && array[i] != firstLargest) {
            secondLargest = array[i]
        }

    }
    return secondLargest
}

let result = findSecondLargest(array)
console.log(result);

// Output --> 40