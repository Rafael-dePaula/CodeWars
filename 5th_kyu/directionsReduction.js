// 5 kyu
// Directions Reduction
// https://www.codewars.com/kata/550f22f4d758534c1100025a/

var v = {"NORTH": "SOUTH", "SOUTH": "NORTH", "EAST": "WEST", "WEST": "EAST"}

function dirReduc(arr){
  var t = arr.length
  var i = 0
  while(i < t-1){
    if(v[arr[i]] == arr[i+1]){
      arr.splice(i, 2)
      i=0
      t-=2
    } else i++  
  }
  return arr
}
