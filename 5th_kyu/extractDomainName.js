// 5th kyu
// Extract the domain name from a URL
// https://www.codewars.com/kata/514a024011ea4fb54200004b/

function domainName(url){
    var s = ["http://", "https://", "www."]
    for (let i of s)
        if(url.indexOf(i) != -1)
            url = url.replace(i, '')            
    return url.slice(0, url.indexOf('.'))
  }