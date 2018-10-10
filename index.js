function getFirstSelector(selector) {
    let item = document.querySelector(selector);
    return item;
}

function nestedTarget() {
    return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
   let rankedList = document.querySelectorAll('.ranked-list li')
   Array.from(rankedList).forEach (rankedList => {
    rankedList.innerHTML = (parseInt(rankedList.innerHTML) + n)
});
}

// function increaseRankBy(n) {
//     let rankedList = document.getElementById('app').querySelectorAll('ul.ranked-list li');
//     for (let i = 0; i < rankedList.length; i++) {
//         rankedList[i].innerHTML = (parseInt(rankedList[i].innerHTML) + n).toString()
//     }
// }

function deepestChild() {
    return document.querySelector('#grand-node div div div div')
    // for (let i = 0; i < item.length; i++) {
    //     if (item.children.length === 0) {
    //         return item.innerHTML;
    //     }
    // }
}