function start() {
    var home = document.getElementsByClassName("home");
    for(var i = 0; i < home.length; i++){
        home[i].style.display = "none";
    }
    var main = document.getElementsByClassName("outer-wrapper");
    for(var i = 0; i < main.length; i++){
        main[i].style.display = null;
    }
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById("here").innerHTML = "";
  document.getElementById("forest").style.display = null;

  var box = document.getElementsByClassName("fourboxes");
  for(var i = 0; i < box.length; i++){
      box[i].style.display = "none";
  }
}