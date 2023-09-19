//🤔DESCRIPTION:
//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
//
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
//
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
//
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

//✅SOLUTION:

function toCamelCase(str){
    return str
        .split(/[-_\s]/)
        .map((word, index) => {
            if (index === 0) {
                return word
            } else {
                return  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            }
        }).join('')
}

console.log(toCamelCase("the-stealth-warrior"))
console.log(toCamelCase("The_Stealth_Warrior"))
console.log(toCamelCase("The_Stealth-Warrior"))