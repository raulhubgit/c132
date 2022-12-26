img = " ";
objects = [];
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status1").innerHTML = "Status: Detectando Objetos"
}
function preload(){
    img = loadImage("dog_cat.jpg");
}
function draw() {
  image(img, 0, 0, 640, 420);
  
  fill("blue");
  text("Gatu", 390, 110);
  stroke("blue");
  noFill();
  rect(380, 69, 341, 353);

  fill("blue");
  text("Cachorru/a", 55, 110);
  stroke("blue");
  noFill();
  rect(36, 72, 341, 353);
}
function modelLoaded() {
    console.log("BASKAHA")
    modelStatus = true;

}
function gotResult(error, results) 
{
  if (error) {
    console.log(error);
  }
  console.log(results);
}