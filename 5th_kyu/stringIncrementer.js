const numbers = "0123456789"
function incrementString (strng) {
    let i = strng.length - 1
    let number = 0
    while(numbers.indexOf(strng[i]) !== -1){
        number += parseInt(strng[i], 10)*(Math.pow(10, strng.length - 1 - i))
        i--
        if(strng[i+1] && strng[i+1] != '9') break
    }
    return strng.slice(0, i+1) + (number+1)
}
console.log(incrementString("foobar0099"))