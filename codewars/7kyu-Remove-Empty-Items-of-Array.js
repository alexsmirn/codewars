function clean(arr) {
    return arr.filter(el => el !== Number)
}

console.log(clean([1, 2, 3, , , , , , , 4, , null, true, false, undefined, '', 'Hello']))