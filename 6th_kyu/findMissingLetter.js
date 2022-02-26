// 6th kyu
// Find the missing letter
// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/

function findMissingLetter(array)
{
    array = array.join('')
    for (let i in array)
        if(i != 0 && array.charCodeAt(i) != array.charCodeAt(i-1)+1)
            return String.fromCharCode(array.charCodeAt(i-1)+1)
}