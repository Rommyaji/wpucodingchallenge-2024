// const countBy = (x, n) => {
//     let z = [];
//     for(let i = 1; i <= n; i++) {
//         z.push(i * x)
//     }
  
//     return z;
// }

const countBy = (x, n) => {
    let z = [...Array(n)].map((el, i) => (i + 1) * x)
    return z
}

console.log(countBy(2, 5));