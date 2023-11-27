function authList(arr) {
    const authListResult = arr.map( username => {
        if (username.length < 6 || username.length > 10) return false
        if (!/\d/.test(username) || !/[a-z]/.test(username)) return false
        if (!/^[a-z0-9]+$/.test(username)) return false
    })

    return authListResult.includes(false) ? false : true
}

const usernames1 = ['john123', 'alex222', 'sandra1'];
const usernames2 = ['john123', 'alex222', 'sandraW'];
const usernames3 = ['john_123', 'alex222', 'sandra1'];
const usernames5 = ['123456'];

console.log(authList(usernames1))
console.log(authList(usernames2))
console.log(authList(usernames3))
console.log(authList(usernames5))



