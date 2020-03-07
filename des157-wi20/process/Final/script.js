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
  }, 1000);

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

/*animate truck*/
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas1");
	anim_container = document.getElementById("animation_container1");
	dom_overlay_container = document.getElementById("dom_overlay_container1");
	var comp=AdobeAn.getComposition("1A5DF1E1A33C44E7B97921D27B5FF58C");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.truck_HTML5Canvas();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
(function (cjs, an) {

  var p; // shortcut to reference prototypes
  var lib={};var ss={};var img={};
  lib.ssMetadata = [
      {name:"truck_HTML5 Canvas_atlas_", frames: [[0,0,1280,720]]}
  ];
  
  
  // symbols:
  
  
  
  (lib.Artboard1 = function() {
    this.initialize(ss["truck_HTML5 Canvas_atlas_"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();
  
  
  
  // stage content:
  (lib.truck_HTML5Canvas = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});
  
    // Layer_1
    this.instance = new lib.Artboard1();
    this.instance.setTransform(-213,19,0.21,0.21);
  
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-202},0).wait(1).to({x:-191},0).wait(1).to({x:-180},0).wait(1).to({x:-168},0).wait(1).to({x:-157},0).wait(1).to({x:-142},0).wait(1).to({x:-131},0).wait(1).to({x:-118},0).wait(1).to({x:-105},0).wait(1).to({x:-92},0).wait(1).to({x:-80},0).wait(1).to({x:-67},0).wait(1).to({x:-55},0).wait(1).to({x:-42},0).wait(1).to({x:-30},0).wait(1).to({x:-19},0).wait(1).to({x:-7},0).wait(1).to({x:5},0).wait(1).to({x:18},0).wait(1).to({x:31},0).wait(1).to({x:42},0).wait(1).to({x:54},0).wait(1).to({x:67},0).wait(1).to({x:79},0).wait(1).to({x:92},0).wait(1).to({x:105},0).wait(1).to({x:116},0).wait(1).to({x:129},0).wait(1).to({x:142},0).wait(1).to({x:153},0).wait(1).to({x:164},0).wait(1).to({x:177},0).wait(1).to({x:188},0).wait(1).to({x:202},0).wait(24));
  
    this._renderFirstFrame();
  
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-85,91,555.8,79.19999999999999);
  // library properties:
  lib.properties = {
    id: '1A5DF1E1A33C44E7B97921D27B5FF58C',
    width: 256,
    height: 144,
    fps: 30,
    color: "#FFFFFF",
    opacity: 1.00,
    manifest: [
      {src:"images/truck_HTML5 Canvas_atlas_.png?1583570438594", id:"truck_HTML5 Canvas_atlas_"}
    ],
    preloads: []
  };
  
  
  
  // bootstrap callback support:
  
  (lib.Stage = function(canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.StageGL();
  
  p.setAutoPlay = function(autoPlay) {
    this.tickEnabled = autoPlay;
  }
  p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
  p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
  p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
  p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
  
  p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
  
  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if(!an.bootstrapListeners) {
    an.bootstrapListeners=[];
  }
  
  an.bootstrapCallback=function(fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if(an.bootcompsLoaded.length > 0) {
      for(var i=0; i<an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };
  
  an.compositions = an.compositions || {};
  an.compositions['1A5DF1E1A33C44E7B97921D27B5FF58C'] = {
    getStage: function() { return exportRoot.stage; },
    getLibrary: function() { return lib; },
    getSpriteSheet: function() { return ss; },
    getImages: function() { return img; }
  };
  
  an.compositionLoaded = function(id) {
    an.bootcompsLoaded.push(id);
    for(var j=0; j<an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  }
  
  an.getComposition = function(id) {
    return an.compositions[id];
  }
  
  
  an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
    var lastW, lastH, lastS=1;		
    window.addEventListener('resize', resizeCanvas);		
    resizeCanvas();		
    function resizeCanvas() {			
      var w = lib.properties.width, h = lib.properties.height;			
      var iw = window.innerWidth, ih=window.innerHeight;			
      var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
      if(isResp) {                
        if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
          sRatio = lastS;                
        }				
        else if(!isScale) {					
          if(iw<w || ih<h)						
            sRatio = Math.min(xRatio, yRatio);				
        }				
        else if(scaleType==1) {					
          sRatio = Math.min(xRatio, yRatio);				
        }				
        else if(scaleType==2) {					
          sRatio = Math.max(xRatio, yRatio);				
        }			
      }			
      domContainers[0].width = w * pRatio * sRatio;			
      domContainers[0].height = h * pRatio * sRatio;			
      domContainers.forEach(function(container) {				
        container.style.width = w * sRatio + 'px';				
        container.style.height = h * sRatio + 'px';			
      });			
      stage.scaleX = pRatio*sRatio;			
      stage.scaleY = pRatio*sRatio;			
      lastW = iw; lastH = ih; lastS = sRatio;            
      stage.tickOnUpdate = false;            
      stage.update();            
      stage.tickOnUpdate = true;		
    }
  }
  
  
  })(createjs = createjs||{}, AdobeAn = AdobeAn||{});
  var createjs, AdobeAn;

  /*popup*/
  function popupfunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    }
