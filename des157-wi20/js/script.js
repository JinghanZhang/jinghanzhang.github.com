var barWidth = 10;
var lastBar = -1;

function setup() {
  createCanvas(800, 250);
  var myCanvas = createCanvas();
  myCanvas.parent(mySketch);
  colorMode(RGB, width, height, 100); 
  noStroke();
}

function draw() {
  var bar = mouseX / barWidth;
  if (bar != lastBar) {
    var barX = bar * barWidth;
    fill(barX, mouseY, 77);
    rect(barX, 0, barWidth, height, 10);
    lastBar = bar;
  }
}