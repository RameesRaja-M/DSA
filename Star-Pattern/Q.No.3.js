// Print the Number Pattern n = 5
// 1
// 12
// 123
// 1234
// 12345

let n = 5;

for(let i = 0; i < n; i++){
    let row = "";
    for(let j = 0; j < i + 1; j++){
        row = row + (j + 1)
    }
    console.log(row);
    
}

// Output : 
// 1
// 12
// 123
// 1234
// 12345