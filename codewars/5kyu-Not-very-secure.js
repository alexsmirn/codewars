//🤔DESCRIPTION:
//In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.
//
// The string has the following conditions to be alphanumeric:
//
// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

//✅SOLUTION:

function alphanumeric(string) {

    const availableSymbols = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ]

    if (string === "") return false

    const splitString = string.split('')

    const resultArray = splitString.map((el) => {
        return availableSymbols.includes(el)
    })

    //First version was {resultArray.includes(false) ? false : true}, but WebStorm recommended to simplify it
    return !resultArray.includes(false)
}


console.log(alphanumeric('hr1_2ngb'))
console.log(alphanumeric(''))
console.log(alphanumeric(' '))
console.log(alphanumeric('hr12ngb'))
console.log(alphanumeric('Hr12Ngb'))
console.log(alphanumeric('Hr12N!gb'))