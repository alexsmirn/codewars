//🤔DESCRIPTION:
//Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
//
// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
//
// Example:
//
// solution(1000); // should return 'M'
// Help:
//
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.
//
// More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

//✅SOLUTION:

function romanNumeralsEncoder(number){

    const allRoman = [
        { symbol: 'M', value: 1000 },
        { symbol: 'CM', value: 900 },
        { symbol: 'D', value: 500 },
        { symbol: 'CD', value: 400 },
        { symbol: 'C', value: 100 },
        { symbol: 'XC', value: 90 },
        { symbol: 'L', value: 50 },
        { symbol: 'XL', value: 40 },
        { symbol: 'X', value: 10 },
        { symbol: 'IX', value: 9 },
        { symbol: 'V', value: 5 },
        { symbol: 'IV', value: 4 },
        { symbol: 'I', value: 1 }
    ]

    if (number < 1 || number > 3999) {
        return 'Your number is not correct! Enter number 1 - 3999'
    } else {
        let resultNum = ''

        for (el of allRoman) {
            while (number >= el.value) {
                resultNum += el.symbol
                number -= el.value
            }
        }

        return resultNum
    }
}

const num1 = 2156
const num2 = 3847
const num3 = 1279
const num4 = 4332
const num5 = 298


console.log(romanNumeralsEncoder(num1))
console.log(romanNumeralsEncoder(num2))
console.log(romanNumeralsEncoder(num3))
console.log(romanNumeralsEncoder(num4))
console.log(romanNumeralsEncoder(num5))