// Print the 0 1 Pattern without refresh
// 1
// 01
// 010
// 1010
// 10101

let n = 5;
let switched = 1 

for(let i = 0; i < n; i++){
    let row = ""

    for(let j = 0; j <= i; j++){
        row = row + switched;

        if (switched == 1) {
            switched = 0;
        } else {
            switched = 1
        }
    }
    console.log(row);
    
}

// Output 
// 1
// 01
// 010
// 1010
// 10101