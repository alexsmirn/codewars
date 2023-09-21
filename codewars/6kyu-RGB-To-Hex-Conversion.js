//🤔DESCRIPTION:
//The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
//
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
//
// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

//✅SOLUTION:

function rgb(...params){
    let paramsArr = [...params]

    const rgbToHex = paramsArr.reduce((accumulator, element) => {

        element = Math.min(element, 255)
        element = Math.max(element, 0)

       accumulator += element.toString(16).padStart(2, '0')

        return accumulator
    }, '')

    return rgbToHex.toUpperCase()
}



console.log('255, 255, 255 --> ', rgb(255, 255, 255))
console.log('255, 255, 300 --> ', rgb(255, 255, 300))
console.log('0, 0, 0 --> ', rgb(0, 0, 0))
console.log('148, 0, 211 --> ', rgb(148, 0, 211))