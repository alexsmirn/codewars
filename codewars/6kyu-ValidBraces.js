//🤔DESCRIPTION:
//Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
//
// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!
//
// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
//
// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.
//
// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

//✅SOLUTION:

const string1 = "(){}[]"
const string2 = "([{}])"
const string3 =  "(}"
const string4 = "[(])"
const string5 = "[({})](]"

function validBraces(braces) {
    let stack = []

    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let i = 0; i < braces.length; i++) {
        const current = braces[i];

        if (isClosedBracket(current)) {
            if (brackets[current] !== stack.pop()) return false
        } else {
            stack.push(current)
        }
    }

    return stack.length === 0
}

const isClosedBracket = (currentBracket) => {
    return [')','}',']'].indexOf(currentBracket) > -1
}

console.log(string1, '=>', validBraces(string1))
console.log(string2, '=>', validBraces(string2))
console.log(string3, '=>', validBraces(string3))
console.log(string4, '=>', validBraces(string4))
console.log(string5, '=>', validBraces(string5))