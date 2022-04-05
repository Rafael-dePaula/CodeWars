// 4th kyu
// Sort binary tree by levels
// https://www.codewars.com/kata/52bef5e3588c56132c0003bc/

function treeByLevels(rootNode) {
    let values = [];
    let nodes = [rootNode];
    for(let i = 0; i<nodes.length; i++) 
        if(nodes[i]){
            values.push(nodes[i].value);
            nodes.push(nodes[i].left, nodes[i].right);
        }
    return values;
}