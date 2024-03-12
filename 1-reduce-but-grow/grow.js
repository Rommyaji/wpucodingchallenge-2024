// function grow(x) {
//     let result = x[0]

//     for(i = 1; i < x.length; i++) {
//         result = result * x[i]
//     }

//     return result
// }

const grow = (x) => {
    const result = x.reduce((acc, curr) => acc * curr)

    return result
}

console.log(grow([1, 2, 3, 4]))