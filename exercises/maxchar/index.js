// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     const chars = {}
//     str.split('').forEach( char => {
//         chars[char] ? chars[char] += 1 : chars[char] = 1
//     })
// }

let maxChar = str => {
    const charMap = {}
    let max = 0
    let maxChar = ''

    str.split('').forEach( char => charMap[char] = charMap[char] + 1 || 1 )

    for (let char in charMap) {
        if ( charMap[char] > max ) {
            max = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}

module.exports = maxChar;

// str.split().forEach( char => charMap[char] = charMap[char] += 1 || 1 )