var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

  btn_red = creatButton("red");
  btn_red.position(100,50);
  btn_red.mousepressed(red_bg);

  btn_green = creatButton("green");
  btn_green.position(250,50);
  btn_green.mousepressed(green_bg);
}

function draw() {
  background(r,g,b);
}

function red_bg()
{
  r = 255;
  g = 0;
  b = 0;

}

function green_bg()
{
  r = 0;
  g = 255;
  b = 0;
}
