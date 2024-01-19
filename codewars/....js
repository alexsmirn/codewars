const student = {
    name: "Marina"
}

const newStudent = student

const myFriend = {
    ...newStudent
}

const newUser = {
    name: "Ivan"
}

const myFriendName =  student.name !== myFriend.name
    ? newUser.name
    : student.name

console.log(myFriendName)