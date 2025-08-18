// Print the Star Pattern n = 5
// *****
// ****
// ***
// **
// *

let n = 5;
for(let i = 0; i < 5; i++){
    let row = "";
    for(let j = 0; j < n - i; j++){
        row = row + "*"
    }
    console.log(row);
    
}

// output
// *****
// ****
// ***
// **
// *