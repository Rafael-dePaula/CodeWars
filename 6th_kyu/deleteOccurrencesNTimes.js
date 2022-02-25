// 6th kyu 
// name: Delete occurrences of an element if it occurs more than n times
// https://www.codewars.com/kata/554ca54ffa7d91b236000023/

function deleteNth(arr,n){
    var ntimes = []
    var result = []
  for(let i of arr){
    if(!ntimes[i]) ntimes[i] = 1
    else if(ntimes[i]<n) ntimes[i]+=1
    else continue
    result.push(i)
}
return result
}