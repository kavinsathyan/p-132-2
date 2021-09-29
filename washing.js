img = "";
status = "";

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


function preload()
{
    img = loadImage('washing machine.jpg');
}

function draw()
{
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Washing Machine",250 ,100);
    noFill();
    stroke("#FF0000");
    rect(230, 70, 200, 300);
}