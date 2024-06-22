const inputs = [1,3,4,6,2,,9,23,12,24,35,16];

// Basic square and cube program
// function square(fn){
//     const squared = [];
//     for(let i of inputs){
//         squared.push(i * i);
//     }
//     return squared;
// }

// function cube(fn){
//     const cubes = [];
//     for(let i of inputs){
//         cubes.push(i*i*i);
//     }
//     return cubes;
// }

// console.log(square(inputs));
// console.log(cube(inputs));

// HOF 

function operator(input, fn){
    const output = [];
    for(let i of inputs){
        output.push(fn(i));
    }
    return output
}
function square(num){
    return num * num ;
}

function cube(num) {
    return num * num * num ;
}
console.log(operator(inputs, square));
console.log(operator(inputs, cube));