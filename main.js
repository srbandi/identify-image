Webcam.set({

height : 300,
width : 350,
image_format : "png",
png_quality : 99.9

});

camera = document.getElementById("camstuff");

Webcam.attach(camera);

function takepic(){

    Webcam.snap(function(cam){

    document.getElementById("result").innerHTML = "<img src='"+cam+"' id='cam'>";

    })

}

console.log("ml5 version"+ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-_7WcF8A0/modle.json",modelloaded);

function modelloaded(){

    console.log("model loaded")

}