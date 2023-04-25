let handpose;
let video;
let leftalexy;
let topalexy;
let leftgood;
let topgood;
let score = 0;
let hands = [];

const displayScore = document.getElementById("score");
const interScore = document.getElementById("inter");
displayScore.innerHTML = "Score = 0 ";

var centi = 0;
var mili = 0;
var sec = 0;
var sec_;
var afficher;
var compteur;
// affichage du compteur à 0
document.getElementById('timer').innerHTML = "0" + sec + ":" + "0" + mili; 
gsap.to(".blue", {rotation: 360, y: 100, duration: 4});
gsap.to(".purple", {rotation: 360, y: 100, duration: 4});
gsap.from(".green", {rotation: -360, y: -100, duration: 5});
 function chrono() {
  setInterval(function (){
    mili++;
    if (mili > 9) {
      mili = 0;
    }
  }, 1);
  centi++;
  centi*10;//=======pour passer en dixièmes de sec
  //=== on remet à zéro quand on passe à 1seconde
  if (centi > 9) {
    centi = 0;
    sec++;
  }  
  if (sec < 10) {
    sec_ = "0" + sec;
  }
  else {
    sec_ = sec;
  }
  afficher = sec_ + ":" + centi + mili;
  document.getElementById("timer").innerHTML = afficher;
  reglage = window.setTimeout("chrono();",100);
}
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  handpose = ml5.handpose(video, modelReady);

  // This sets up an event that fills the global variable "predictions"
  // with an array every time new hand poses are detected
  handpose.on("hand", results => {
    hands = results;
  });

  // Hide the video element, and just show the canvas
  video.hide();
}
function modelReady() {
  chrono();
  console.log("Model ready!");
}
function draw() {
  translate(video.width, 0);
  //then scale it by -1 in the x-axis
  //to flip the image
  scale(-1, 1);
  image(video, 0, 0, width, height);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  Grabbed();
  Grab();
}
function drawKeypoints() {
  for (let i = 0; i < hands.length; i += 1) {
    const hand = hands[i];
    for (let j = 0; j < hand.landmarks.length; j += 1) {
      const keypoint = hand.landmarks[j];
      fill(0, 255, 0);
      noStroke();
      ellipse(keypoint[0], keypoint[1], 10, 10);
    }
  }
}
function Grabbed(){
  if (document.getElementById("alexy")){
    let count = 0;
      if(hands[0]){
        console.log(640-leftalexy)
        console.log(topalexy)

        hands[0].landmarks.forEach(point => {
          if(point[0] <=640-leftalexy && point[0] >=540-leftalexy ){
            if(point[1]>=topalexy && point[1]<=topalexy+100){
              count+=1
            }
          }
        })
      console.log(hands[0].landmarks[20])
      if(count>15){
        score +=1;
        console.log("score : " + score)
        
        displayScore.innerHTML = "Score = " + score ;
        const display = document.createElement("li")
        display.innerHTML = afficher + " Score " + score;
        interScore.appendChild(display);

        document.getElementById("alexy").remove();
      };
      }
  }
  else{
      let alexy = document.createElement("div");
      alexy.id = "alexy" ;
      alexy.className ="blue";
      alexy.style.top = topalexy
      alexy.style.left = leftalexy
      document.body.appendChild(alexy);
  }
}
function Grab(){
if (document.getElementById("good")){
  let count = 0;
    if(hands[0]){
      console.log(640-leftgood)
      console.log(topgood)

      hands[0].landmarks.forEach(point => {
        if(point[0] <=640-leftgood && point[0] >=540-leftgood ){
          if(point[1]>=topgood && point[1]<=topgood+100){
            count-=1
          }
        }
      })
    console.log(hands[0].landmarks[20])
    if(count>15){
      score -=1;
      console.log("score : " + score)
      
      displayScore.innerHTML = "Score = " + score ;
      const display = document.createElement("li")
      display.innerHTML = afficher + " Score " + score;
      interScore.appendChild(display);

      document.getElementById("good").remove();
    };
    }
}
else{
    let good = document.createElement("div");
    good.id = "good" ;
    good.className ="green";
    good.style.top = topgood
    good.style.left = leftgood
    document.body.appendChild(good);
}
}
 /*  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }  */ 
