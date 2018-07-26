// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     let reversed = parseInt( n.toString()
//                               .split('')
//                               .reverse()
//                               .join('') )
//     if (n >= 0) {
//         return reversed
//     } else {
//         return reversed * -1
//     }
// }

// function reverseInt(n) {
//     let reversed = n.toString()
//                     .split('')
//                     .reverse()
//                     .join('')
//     if (Math.sign(n) === 1 || Math.sign(n) === 0) {
//         return parseInt(reversed)
//     } else {
//         return parseInt(reversed) * -1
//     }
// }

const reverseInt = (n) => {
    const reversed = n.toString()
        .split('')
        .reverse()
        .join('')
    return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;
