var XN = 0;
var YN = 0;
var XE = 0;
var YE = 0;

function preload(){
    Mimage = loadImage("https://i.postimg.cc/hhRhskFK/mustache.png");
    Gimage = loadImage("https://i.postimg.cc/ydWj9bCf/glass.png");
}

function setup(){
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(350, 350);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("loaded");
}

function gotPoses(results){
    XN = results[0].pose.nose.x - 30;
    YN = results[0].pose.nose.y + 8;
    XE = results[0].pose.rightEye.x - 25;
    YE = results[0].pose.rightEye.y - 30;
}

function draw(){
    image(video, 0, 0, 350, 350);
    image( Mimage, XN, YN, 60, 30);
    image( Gimage, XE, YE, 110, 55);
}

function take_snapshot(){
    save("peeper.png");
}