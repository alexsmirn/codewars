/*function scramble() {
    const scrambledStr = 'rkqodlw'
    const regexStr = new RegExp(`^(?=.*[world])world*$`)

    const result = regexStr.test(scrambledStr)


    return !!result
}

console.log(scramble())*/

const wordToCheck = 'codewars'

const lookaheadPatterns = wordToCheck.split('').map(el => `(?=.*${el})`)
const regExPattern = `^${lookaheadPatterns.join('')}`

console.log(new RegExp(regExPattern).test('cedewaraaossoqqyt'))

