// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     let pattern = /[^A-Za-z0-9_]/g;
//     // let pattern = /[^\w]/g;
//     let newA = stringA.replace(pattern, '').toLowerCase();
//     let newB = stringB.replace(pattern, '').toLowerCase();
//     let charMapA = {};
//     let charMapB = {};

//     newA.split('').forEach( char => charMapA[char] = charMapA[char] + 1 || 1 );
//     newB.split('').forEach( char => charMapB[char] = charMapB[char] + 1 || 1 );
    
//     if ( Object.keys(charMapA).length === Object.keys(charMapB).length ) {
//         console.log('charMapA ', charMapA);
//         console.log('charMapB ', charMapB);
//         for (char in charMapA) {
//             if (charMapA[char] !== charMapB[char]) {
//                 return false;   
//             }
//         }
//         return true;
//     }
// }

let anagrams = (stringA, stringB) => {
    return cleanString(stringA) === cleanString(stringB);
}

let cleanString = str => {
    let cleaned = str.replace(/[^A-Za-z0-9_]/g, '')
                     .toLowerCase()
                     .split('')
                     .sort()
                     .join();
    return cleaned;
}

let buildCharMap = str => {
    let charMap = {};

    str.split('').forEach( char => charMap[char] = charMap[char] + 1 || 1 );
    return charMap;
}

module.exports = anagrams;
