alarma = "alarma.mp3";
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
}
function start() { 
  create
if (status = "true") {
    stopAudio('audio');
    document.getElementById('status').innerHTML = "Estado: bebé detectado";
}
if (status = "false") {
    document.getElementById('status').innerHTML = "Estado: bebé no detectado, se iniciara la alarma"
    playAudio('alarma');
}
}