song = "";
dance = "";
function preload()
{
    song = loadsound("music.mp3")
    dance = loadsound("music2.mp3")
}

function setup(){
    canvas = createCanvas(400,350)
    canvas.position(500,300)

    video = createCapture(VIDEO);
    video.hide()
    posenet = ml5.posenet(video,modeloaded)

}
function modeloaded (){
    console.log("posenet is initialised")
}
function draw() {
    Image(video,0,0,400,350)
    
}
