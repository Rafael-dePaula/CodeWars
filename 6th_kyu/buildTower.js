// 6th kyu
// Build Tower
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/

function floorBuild(blocks, width){
    var empty = ' '.repeat((width-1)/2 - (blocks-1)/2)
    return empty + '*'.repeat(blocks) +  empty
}

function towerBuilder(nFloors) {
    var width = nFloors*2 - 1
    var tower = []
    for (let i = 1; i<=width; i+=2) {
        tower.push(floorBuild(i, width))
    }
    return tower
}