// Print the Number Pattern n = 5
// 1
// 22
// 333
// 4444
// 55555

let n = 5;
for(let i = 1; i <= n; i++){
    let row = ""
    for(let j = 5; j >= i; j--){
        row = row + (i+1)
    }
    console.log(row);
    
}

// output
// 1
// 22
// 333
// 4444
// 55555