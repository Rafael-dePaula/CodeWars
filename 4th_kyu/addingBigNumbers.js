// 4th kyu
// Adding Big Numbers
// https://www.codewars.com/kata/525f4206b73515bffb000b21

function sumDigitsMod(a, b, acc = 0) {
    res = (Number(a) + Number(b)) + acc
    return [res%10, res>9 ? 1: 0]
}

function add(a, b) {
    let n1 = a.padStart(b.length, '0')
    let n2 = b.padStart(a.length, '0')
    let acc, sum, result;

    let index = n1.length;
    while (--index >= 0){
        [sum, acc] = sumDigitsMod(n1[index], n2[index], acc);
        result = sum + (result || '');
    }
    return (acc && acc > 0) ? acc + result : result;
}

console.log()