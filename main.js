song="";
function preload(){
  song=loadSound('music.mp3');  
}
function setup(){
    canvas=createCanvas(500, 400);
    canvas.position();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
image(video, 0, 0, 500, 400);
}
function d(){
    song.play();
}