difference = 0;
nose_x = 0;
nose_y = 0;
function setup(){
    canvas = createCanvas(550, 550);
    canvas.position(560, 200);
    camera = createCapture(VIDEO);
    camera.size(550, 500);
    classifier = ml5.poseNet(camera, loaded);
    classifier.on("pose", gotResult)
}
function draw(){
    canvas.background("cornflowerblue");
    textSize(difference);
    fill("red");
    text("hajun", nose_x, nose_y);
}
function loaded(){
    console.log("model is loaded");
}
function gotResult(result){
    if(result.length > 0){
        console.log(result);
        left_x = result[0].pose.leftWrist.x;
        left_y = result[0].pose.leftWrist.y;
        right_x = result[0].pose.rightWrist.x;
        right_x = result[0].pose.rightWrist.y;
        nose_x = result[0].pose.nose.x;
        nose_y = result[0].pose.nose.y;
        difference = Math.floor(left_x - right_x)
    }
}