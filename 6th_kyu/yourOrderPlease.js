// 6th kyu 
// name: Your order, please
// https://www.codewars.com/kata/55c45be3b2079eccff00010f/

const numbers = "123456789"

function order(words){
    var sorted = []
    for (let word of words.split(" ")) 
        for (let c of word)
            if (numbers.indexOf(c) !== -1)
                sorted[numbers.indexOf(c)] = word
    
    return sorted.join(" ")
}