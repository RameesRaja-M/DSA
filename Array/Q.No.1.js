// Find the index of value an array

let array = [10, 20, 30, 40, 50]

function findIndex(array, x) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == x) {
            return i
        }
    }
    return -1
}

let result = findIndex(array, 40)
console.log(result);


// Output : 2