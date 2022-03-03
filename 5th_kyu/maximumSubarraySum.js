// 5th kyu
// Maximum subarray sum
// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/

var maxSequence = function(arr){
    var last = 0, max = 0
    for(let n of arr) max = Math.max(max, last = Math.max(n, n + last))      
    return max
}
