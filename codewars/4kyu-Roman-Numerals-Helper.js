//🤔DESCRIPTION:
//Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.
//
// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
//
// Input range : 1 <= n < 4000
//
// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").
//
// Examples
// to roman:
// 2000 -> "MM"
// 1666 -> "MDCLXVI"
// 1000 -> "M"
//  400 -> "CD"
//   90 -> "XC"
//   40 -> "XL"
//    1 -> "I"
//
// from roman:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "M"       -> 1000
// "CD"      -> 400
// "XC"      -> 90
// "XL"      -> 40
// "I"       -> 1

// Help
// Symbol	Value
// I	1
// IV	4
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000

//✅SOLUTION:

class RomanNumerals {
    toRoman(num,) {

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

        if (typeof num !== 'number') {
            console.error('Inappropriate data type (string), expected (number). Use fromRoman() method')
        } else {
            if (num < 1 && num >= 4000) console.error('Inappropriate number, expected 1 - 3999')
            else {

                let romanResultNumber = ''

                for (let el of allRoman) {
                    while (num >= el.value) {
                        romanResultNumber += el.symbol
                        num -= el.value
                    }
                }

                return romanResultNumber
            }
        }
    }

    fromRoman(string,) {

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

        if (typeof string !== 'string') {
            console.error('Inappropriate data type (number), expected (string). Use toRoman() method')
        } else {
                let resultnumber = 0

                for (let e = 0; e < string.length; e++) {
                    debugger
                    const currentElement = allRoman.find((obj) => {
                        return obj.symbol === string[e]
                    })
                    const nextElement = allRoman.find((obj) => {
                        return obj.symbol === string[e + 1]
                    })
                    if (currentElement.symbol === string[string.length - 1]) {
                        return resultnumber += currentElement.value
                    }

                    if (currentElement.value >= nextElement.value) {
                        resultnumber += currentElement.value
                    }

                    if (currentElement.value < nextElement.value) {
                        resultnumber += (nextElement.value - currentElement.value)
                        e++
                    }
                }

                return resultnumber
            }
        }
}

const number1 = new RomanNumerals()
let romanNumber = number1.toRoman(132)
console.log(romanNumber)
console.log(number1.fromRoman(romanNumber))





