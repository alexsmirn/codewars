//🤔DESCRIPTION:
//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
//
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

//✅SOLUTION:

function charCodeAtFn(item) {
    return item.charCodeAt(0)
}

function rot13LetterConvertor(l, minCode, maxCode) {
    return charCodeAtFn(l) + 13 > maxCode ? ((charCodeAtFn(l) + 13) - maxCode) + minCode - 1 : l.charCodeAt(0) + 13
}

function rot13(message) {
    let resultMessage = ''

    let splitMessage = message.split('')

    resultMessage = splitMessage.map(el => {

        if (charCodeAtFn(el) >= 65 && charCodeAtFn(el)<= 90) {
            return String.fromCharCode(rot13LetterConvertor(el, 65, 90))
        }

        if (charCodeAtFn(el) >= 97 && charCodeAtFn(el) <= 122) {
            return String.fromCharCode(rot13LetterConvertor(el, 97, 122))
        }

        else return el
    })

    return resultMessage.join('')
}

console.log(rot13('Hello! my name is Alex'))
