//4th kyu
//Pyramid Slide Down
//https://www.codewars.com/kata/551f23362ff852e2ab000037/

var memory = []
function lsdRecursive(pyramid, level, block){

    if(level >= pyramid.length) return 0

    if(memory[level][block]) return memory[level][block]

    var left, right
    left = lsdRecursive(pyramid, level + 1, block)
    right = lsdRecursive(pyramid, level + 1, block + 1)

    memory[level][block] = pyramid[level][block] + Math.max(left, right)

    return memory[level][block]
}

function longestSlideDown (pyramid) {
    for(l in pyramid) 
        memory.push([])

    return lsdRecursive(pyramid, 0, 0)
}
