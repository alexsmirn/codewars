function sameCase(a, b) {

    const caseDetector =(str) => str.toUpperCase() === str ? 'isUpperCase' : 'isLowerCase'
    const isLetter = (str) => str.match(/[^a-zA-Z]/) === null

    return !isLetter(a) || !isLetter(b) ? -1 : caseDetector(a) === caseDetector(b) ? 1 : 0
}
console.log(sameCase('B', 'C'))
