
function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget () {
  return document.querySelector('#nested')
}

function increaseRankBy (n) {
  const list = document
    .getElementById('app')
    .querySelectorAll('ul.ranked-list li')
    for (let i = 0; i < list.length; i++) {
      item = parseInt(list[i].innerHTML)
      list[i].innerHTML = ((item + parseInt(n)).toString())
    }
}

function deepestChild () {
  return document.querySelector('#grand-node div div div div')
}