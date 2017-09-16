function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested div.target');

}

function increaseRankBy(n){
  var rankedLists = document.querySelectorAll("ul.ranked-list");
  for(var i = 0; i < rankedLists.length; i++) {
    var list = rankedLists[i].querySelectorAll('li');
    for (var j = 0; j < list.length; j++) {
      list[j].innerHTML = (parseInt(list[j].innerHTML) + n).toString();
    }
  }
}

function deepestChild(){
  var divs = document.querySelectorAll('#grand-node');
  var children = divs[0].children;
  while(children[0].children.length != 0){
      children = children[0].children;
  }
  return children[0];
}
