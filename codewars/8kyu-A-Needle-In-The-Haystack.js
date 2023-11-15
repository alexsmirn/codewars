function findNeedle(hayStack) {
    return hayStack.includes('needle')
        ? `found the needle at position ${hayStack.indexOf('needle')}`
        : `No needle in the haystack`
}

const hayStackWithNeedle = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]
const hayStackWithOutNeedle = ["hay", "junk", "hay", "hay", "moreJunk", "randomJunk"]

console.log(findNeedle(hayStackWithNeedle))
console.log(findNeedle(hayStackWithOutNeedle))

