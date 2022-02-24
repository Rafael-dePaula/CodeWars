function descendingOrder(n){
    var numerals = []
    var result = 0

    while(n > 0){
        numerals.push(n%10)
        n = Math.floor(n / 10)
    }
    numerals.sort()

    for(let i in numerals)
        result += numerals[i]* Math.pow(10,i)     
    
    return result
}