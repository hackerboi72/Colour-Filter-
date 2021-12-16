function preload() {
    
}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(100, 300)
    video = createCapture(VIDEO);
    video.hide();
    color = ""
}
function draw() {
    image(video, 0,0 ,640, 480)
    tint(color)
}
function apply() {
    color = document.getElementById("colourinput").value;
}
function take_snapshot() {
    save('colourfilter.png')
}