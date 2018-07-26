// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    let isDivisible = (dividend, divisor) => {
        return dividend % divisor === 0
    }
    
    for (let i = 1; i <= n; i++) {
        let answer = ''
        if ( isDivisible(i, 3) ) {
            answer += 'fizz'
        }
        if ( isDivisible(i, 5) ) {
            answer += 'buzz'
        }
        console.log( answer || i )
    }     
}
// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzbuzz')
//         } else if (i % 3 === 0) {
//             console.log('fizz')
//         } else if (i % 5 === 0) {
//             console.log('buzz')
//         } else {
//             console.log(i)
//         }
//     }
// }

module.exports = fizzBuzz;
