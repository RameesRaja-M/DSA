// Print the 0 1 Pattern
// 1
// 10
// 101
// 1010
// 10101

let n = 5;

for(let i = 0; i < 5; i++){
    let row = "";
    let switched = 1;

    for(let j = 0; j <= i; j++){
        row = row + switched;

        if (switched == 1) {
            switched = 0;
        } else {
            switched = 1;
        }
    }
    console.log(row);
    
}

// Output 
// 1
// 10
// 101
// 1010
// 10101