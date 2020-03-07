function start() {

  var home = document.getElementsByClassName("home");
    for(var i = 0; i < home.length; i++){
        home[i].style.display = "none";
    }
  var loading = document.getElementsByClassName("circle");
    for(var i = 0; i < loading.length; i++){
      loading[i].style.display = null;
    }

  setTimeout(function(){
    var main = document.getElementsByClassName("outer-wrapper");
    for(var i = 0; i < main.length; i++){
        main[i].style.display = null;
    }
    var nav = document.getElementsByTagName("nav");
    for(var i = 0; i < nav.length; i++){
        nav[i].style.display = null;
    }

    for(var i = 0; i < loading.length; i++){
      loading[i].style.display = "none";
    }
  }, 3000);

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

/*flip*/
const flippeds = []
const lis = Array.from(document.querySelectorAll("li"));
let at = lis.length;
document.querySelector("ul").addEventListener("click", e => {

  const el = e.target;
  if (el.classList.contains("unflipable")) {
    el.style.animation = "none";
    el.offsetWidth;
    el.style.animation = "unflip-notice 0.1s";
    return;
  }
  if (el.classList.contains("flipped") || 
      el === e.currentTarget/*fix for chrome*/) {
    lis[at].classList.remove("flipped");
    at += 1; 
    if (at == lis.length) {
      e.currentTarget.classList.remove("has-flippage");
    }
  }
  else { 
    if (at == lis.length) {
      e.currentTarget.classList.add("has-flippage");
    }
    at -= 1;
    lis[at].classList.add("flipped");
  }
})

function next() {

  var page2 = document.getElementsByClassName("outer-wrapper2");
    for(var i = 0; i < page2.length; i++){
        page2[i].style.display = null;
  }
  var page1 = document.getElementsByClassName("outer-wrapper");
    for(var i = 0; i < page1.length; i++){
      page1[i].style.display = "none";
  }
  var page2 = document.getElementsByClassName("outer-wrapper3");
    for(var i = 0; i < page2.length; i++){
        page2[i].style.display = "none";
  }
}

function next1() {

  var page2 = document.getElementsByClassName("outer-wrapper2");
    for(var i = 0; i < page2.length; i++){
        page2[i].style.display = "none";
  }
  var page1 = document.getElementsByClassName("outer-wrapper");
    for(var i = 0; i < page1.length; i++){
      page1[i].style.display = null;
  }
  var page2 = document.getElementsByClassName("outer-wrapper3");
    for(var i = 0; i < page2.length; i++){
        page2[i].style.display = "none";
  }
}

function next2() {

  var page2 = document.getElementsByClassName("outer-wrapper3");
    for(var i = 0; i < page2.length; i++){
        page2[i].style.display = null;
  }
  var page1 = document.getElementsByClassName("outer-wrapper2");
    for(var i = 0; i < page1.length; i++){
      page1[i].style.display = "none";
  }
  var page1 = document.getElementsByClassName("outer-wrapper");
    for(var i = 0; i < page1.length; i++){
      page1[i].style.display = "none";
  }
}

/*img*/
document.getElementById("imagecontainer").onclick = function () {
  var num = Math.floor(Math.random() * 5) + 1;
  console.log(num);
  document.getElementById("img").src = num+".jpg";
  document.getElementById("img").style.marginLeft = event.clientX + "px";
  document.getElementById("img").style.marginTop = event.clientY + "px";
}

/*chain*/
var points = 25;

// The distance between the points:
var length = 35;

var path = new Path({
	strokeColor: '#E4141B',
	strokeWidth: 20,
	strokeCap: 'round'
});

var start = view.center / [10, 1];
for (var i = 0; i < points; i++)
	path.add(start + new Point(i * length, 0));

function onMouseMove(event) {
	path.firstSegment.point = event.point;
	for (var i = 0; i < points - 1; i++) {
		var segment = path.segments[i];
		var nextSegment = segment.next;
		var vector = segment.point - nextSegment.point;
		vector.length = length;
		nextSegment.point = segment.point - vector;
	}
	path.smooth({ type: 'continuous' });
}

function onMouseDown(event) {
	path.fullySelected = true;
	path.strokeColor = '#e08285';
}

function onMouseUp(event) {
	path.fullySelected = false;
	path.strokeColor = '#e4141b';
}
