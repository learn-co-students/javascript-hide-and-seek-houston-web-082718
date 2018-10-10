function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('.ranked-list')
  const firstList = list[0].children
  const secondList = list[1].children

  for (let i=0; i < firstList.length; i++) {
    firstList[i].innerText = parseInt(firstList[i].innerText) + n
  }

  for (let i=0; i < secondList.length; i++) {
    secondList[i].innerText = parseInt(secondList[i].innerText) + n
  }
}
