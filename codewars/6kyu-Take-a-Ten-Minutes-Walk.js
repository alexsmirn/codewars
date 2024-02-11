function isValidWalk(walk) {
    if (walk.length < 10 || walk.length > 10) return false

    let vertical = 0
    let horizontal = 0

    walk.forEach( el => {
        switch (el) {
            case 'n':
                vertical++
                break
            case 's':
                vertical--
                break
            case 'w':
                horizontal--
                break
            case 'e':
                horizontal++
                break
            default: return false
        }
    })

    return vertical === 0 && horizontal === 0
}

console.log(isValidWalk(['n', 's', 'w', 'e', 'n', 's', 'w', 'e', 'n', 's']))
console.log(isValidWalk(['n', 'n', 'w', 'e', 'n', 'n', 'w', 'e', 'n', 'n']))

