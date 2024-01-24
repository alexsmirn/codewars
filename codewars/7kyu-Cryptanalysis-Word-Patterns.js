function wordPattern(word) {
   word = word.toLowerCase()

    let pattern = ''
    let code = 0
    let codeMap = {}

    for (let i = 0; i < word.length; i++) {
        const currentChar = word[i]

        if (!(currentChar in codeMap)) {
            codeMap[currentChar] = code
            code++
        }

        pattern += codeMap[currentChar] + '.'
    }

    return pattern.slice(0, pattern.length - 1)
}

console.log(wordPattern('friend'))
console.log(wordPattern('hello'))

