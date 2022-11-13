status1 = "";

function preload()
{
    img = loadImage('blender.jpg');
}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status1").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status1 = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results)
    objects = results;
}

function back()
{
    window.navigate("index.html")
}