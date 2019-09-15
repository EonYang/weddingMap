let logo;
let header;
var myCanvas;
let dots = [];
let numOfDots = 24;
let t = 0;
let cH = 180;


function preload(){
  logo = loadImage("./imgs/logo.png");
}

function setup(){
  frameRate(60);
  colorMode(HSB, 360, 100, 100);
  myCanvas = createCanvas(windowWidth, windowWidth);
  myCanvas.parent("headerBlock");
  for (i = 0; i< numOfDots; i++){
    dots.push(new DOT());

  }
}

function draw(){
  cH += 0.2;
  fill(cH, 30, 90);
  background(255);
  let bottomY = height*0.629;
  let bottomXOffset = width * 0.214;
  let topYOffset = height*0.24;
  strokeWeight(width/70);
  triangle(width/2, height/2 - topYOffset, width/2 - bottomXOffset, bottomY, width/2 + bottomXOffset, bottomY, )


  t += 0.01;

  strokeWeight(width/90);
  waveDots(dots);
  image(logo, 0, 0, width, height);
}


function waveDots(dots){
  let startX = width * 0.3;
  let xSpacing = (width - startX * 2)/numOfDots;
  let startY = height * 0.5;
  let a = sin( t );
  let h = height * 0.04;

  for (i = 0; i < numOfDots; i++){
    let a = sin( t + i*0.2) * h;
    dots[i].x = startX + i * xSpacing;
    dots[i].y = startY + a;
    dots[i].show();
  }

}

class DOT {
  constructor (){
    this.x = 0;
    this.y = 0;
    this.show = () => point(this.x, this.y);
  }
}
