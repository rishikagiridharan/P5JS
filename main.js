function preload() {
}

function setup() {
    canvas = createCanvas(1000, 600);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    
    fill(0, 200, 0);
    rect(275,75, 550, 450);
    fill(250, 0, 0);
    circle(275,75,50);
    circle(825,75,50);
    circle(275,525,50);
    circle(825,525,50); 
}

function draw() {
    image(video, 300, 100, 500, 400);

}

function take_snapshot() {
    save('student_name.png');
}

