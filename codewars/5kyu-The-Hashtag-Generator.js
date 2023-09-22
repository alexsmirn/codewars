//🤔DESCRIPTION:
//The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
//
// Here's the deal:
//
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

//✅SOLUTION:

function generateHashtag (str) {

        let splitStr = str.split(' ')

        splitStr = splitStr.filter(el => el !== '')

        if (splitStr.length === 0) return false

        splitStr = splitStr.map(word => {
            return word[0].toUpperCase() + word.slice(1)
        })

        const result = '#' + splitStr.join('')

        if (result.length > 140 || result.length === 0) return false
        else return result

}

console.log(generateHashtag(" Hello there thanks for trying my Kata"))
console.log(generateHashtag("    Hello     World   "))
console.log(generateHashtag(""))


