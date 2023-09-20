//🤔DESCRIPTION:
//Given a time in AM/PM format as a string, convert it to 24-hour military time time as a string.
//
// Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock
//
// Try not to use built-in Date/Time libraries.
//
// Examples
// "07:05:45PM"  -->  "19:05:45"
// "12:00:01AM"  -->  "00:00:01"
// "11:46:47PM"  -->  "23:46:47"

//✅SOLUTION:

const time1 = '07:05:45PM'
const time2 = '12:00:01AM'
const time3 = '11:46:47PM'

function getMilitaryTime(inputTime) {
    let slicedInputTime = inputTime.slice(0, 2);

    if (inputTime.indexOf('PM') > -1 || inputTime.indexOf('pm') > -1) {
        if (slicedInputTime !== '12') {
            slicedInputTime = String(parseInt(slicedInputTime) + 12).padStart(2, '0');
        }
        return inputTime.replace(inputTime.slice(0, 2), slicedInputTime).replace(/(PM|pm)/, '');
    }

    if (inputTime.indexOf('AM') > -1 || inputTime.indexOf('am') > -1) {
        if (slicedInputTime === '12') {
            slicedInputTime = '00';
        }
        return inputTime.replace(inputTime.slice(0, 2), slicedInputTime).replace(/(AM|am)/, '');
    }
}


console.log(time1, '-->', getMilitaryTime(time1))
console.log(time2, '-->', getMilitaryTime(time2))
console.log(time3, '-->', getMilitaryTime(time3))

let con = '2'

let padStart = con.padStart(2, 0)

console.log(padStart)