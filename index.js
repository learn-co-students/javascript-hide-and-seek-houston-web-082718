
function getFirstSelector(selector){
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function deepestChild() {
    let child = document.getElementById('grand-node').querySelectorAll('div');   
    let result = []
    for (let i = 0; i < child.length; i++) {
        result.push(child[i])
    }  
    return result.pop()  
}

function increaseRankBy(n){
    let rankedList = document.getElementById("app").querySelectorAll('ul.ranked-list li');
    for (let i = 0; i < rankedList.length; i++)
        rankedList[i].innerHTML = (parseInt(rankedList[i].innerHTML) + n).toString()
}
debugger