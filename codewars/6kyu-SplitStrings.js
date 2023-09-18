//🤔DESCRIPTION:
//Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
// Examples:
//
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//✅SOLUTION:

function solution(str) {
    const groups = []

    for (let i = 0; i < str.length; i += 2) {

        const group = str.slice(i, i + 2)

        groups.push(group)
    }

    if (groups.length > 0 && groups[groups.length - 1].length % 2 !== 0) {
        groups[groups.length - 1] += '_'
    }

    return groups;
}

const abc = 'abc'
const abcdef = 'abcdef'

console.log(solution(abc))
console.log(solution(abcdef))

