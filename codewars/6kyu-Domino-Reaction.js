function domino_reaction(s) {
    const splitString = s.split('')

    for (let i = 0; i < splitString.length; i++) {
        const currentEl = splitString[i]

        if (currentEl === '|') {
            splitString[i] = '/'
        }

        if (currentEl === '/' || currentEl === ' ') {
            break
        }
    }

    return splitString.join('')
}


console.log(domino_reaction("||| ||||//| |/"))
console.log(domino_reaction("|||||"))
console.log(domino_reaction(" ///","Bad reaction"))