//🤔DESCRIPTION:
//Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
//
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= length of input <= 100
//
// All inputs will be strings, consisting only of characters ( and ).
// Empty strings are considered balanced (and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.
//
// Protip: If you are trying to figure out why a string of parentheses is invalid, paste the parentheses into the code editor, and let the code highlighting show you!

//✅SOLUTION:

function validParentheses(parenStr) {
    let stack = []

    let parentheses = {')': '('}

    for (let i = 0; i < parenStr.length; i++) {
        const current = parenStr[i];

        if (')'.indexOf(current) > -1) {
            if (parentheses[current] !== stack.pop()) return false
        } else {
            stack.push(current)
        }
    }

    return stack.length === 0
}

const s1 = "()"
const s2 = ")(()))"
const s3 = "("
const s4 = "(())((()())())"

console.log(s1, '=>', validParentheses(s1))
console.log(s2, '=>', validParentheses(s2))
console.log(s3, '=>', validParentheses(s3))
console.log(s4, '=>', validParentheses(s4))