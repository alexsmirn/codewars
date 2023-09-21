//🤔DESCRIPTION:
//There is an array with some numbers. All numbers are equal except for one. Try to find it!
//
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
//
// The tests contain some very huge arrays, so think about performance.

//✅SOLUTION:

function findUniq(arr) {
    let elementGroup1 = []
    let elementGroup2 = []

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]

        if (elementGroup1.length === 0) {
            elementGroup1.push(element)
        }

        if (element === elementGroup1[0]) {
            elementGroup1.push(element)
        } else {
            elementGroup2.push(element)
        }
    }

    return elementGroup1.length > elementGroup2.length ? elementGroup2[0] : elementGroup1[0]
}

const arr1 = [ 1, 1, 1, 2, 1, 1 ]
const arr2 = [ 0, 0, 0.55, 0, 0 ]

console.log(`findUniq(${arr1}) === `, findUniq(arr1))
console.log(`findUniq(${arr2}) === `, findUniq(arr2))
