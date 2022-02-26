// 6th kyu
// Highest Scoring Word
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/

function high(x){
    var maxScore = 0
    var wordS = ''
    for (let word of x.split(' ')){
        let score = 0 
        for (let c in word) score += (word.charCodeAt(c) - 96)
        if (score > maxScore) {
            maxScore = score
            wordS = word
        }
    }
    return wordS
}