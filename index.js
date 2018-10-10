function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector(".target");
}

function deepestChild() {
    let node = document.querySelector("#grand-node")
    let nextNode = node.children[0]
    
    while (nextNode) {
        node = nextNode;
        nextNode = node.children[0];
    }

    return node;
}

function increaseRankBy(n) {
    let ranked = document.getElementsByClassName("ranked-list")
    for (let i = 0; i < ranked.length; i++) {
        let children = ranked[i].children;
        for (let j = 0; j < children.length; j++) {
            children[j].innerHTML = parseInt(children[j].innerHTML) + n;
            }
    }
}