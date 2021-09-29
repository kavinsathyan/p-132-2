img = "";
status = "";

function preload()
{
    img = loadImage('teddy.jpg');
}

function setup()
{
    canvas = createCanvas(640, 300);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects";
}


function modelLoaded()
{
    console.log("model Loaded!");
    status= true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if (error) {
        console.log(error);
    }
    console.log(results);
}


function draw()
{
    image(img,0,0,640,420);
    fill("#FF0000");
    text("teddy bear",120,40);
    noFill();
    stroke("#FF0000");
    rect(100, 7, 520, 400);
}