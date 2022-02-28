// 5th kyu
// Product of consecutive Fib numbers
// https://www.codewars.com/kata/5541f58a944b85ce6d00006a/

function productFib(prod){
    var fib0 = 0
    var fib1 = 1
    while (fib0 * fib1 <= prod){
        if(fib0 * fib1 == prod) return [fib0, fib1, true]
        let aux = fib0
        fib0 = fib1
        fib1 = aux + fib1
    }
    return [fib0, fib1, false]
}