// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 400;

// Animation variables

let leaf1X = 240;
let leaf1Xspeed = 1;

let bird1X = 30;

let leaf2X = 320;
let leaf2Xspeed = 1;

let leaf3X = 340;
let leaf3Xspeed = 1;

let cloud1X = 130;
let cloud1Xspeed = 1;

let cloud2X = 400;
let cloud2Y = 0;

let treeR = 173;
let treeG = 255;
let treeB = 47;

let hillR = 0;
let hillG = 128;
let hillB = 0;

let skyR = 173;
let skyG = 216;
let skyB = 230;

// let flowerColour1 = "red";
flower1R = 255;
flower1G = 0;
flower1B = 0;

// let flowerColour2 = "yellow";
flower2R = 255;
flower2G = 255;
flower2B = 0;

// let flowerColour3 = "purple";
flower3R = 148;
flower3G = 0;
flower3B = 211;

// Track frames
let frame = 0;

// Trigger the start of animation
requestAnimationFrame(draw);

// draw function

function draw() {
  // Sky
  ctx.fillStyle = `rgb(${skyR}, ${skyG}, ${skyB})`;
  ctx.fillRect(0, 0, 500, 400);

  // Frame timing
  frame++;

  // Sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(500, 0, 50, 0, 2 * Math.PI);
  ctx.fill();

  // Hill
  ctx.fillStyle = `rgb(${hillR}, ${hillG}, ${hillB})`;
  ctx.beginPath();
  ctx.arc(250, 400, 250, 0, 2 * Math.PI);
  ctx.fill();

  // Trees
  ctx.fillStyle = "brown";
  ctx.fillRect(50, 160, 30, 150);
  ctx.fillRect(400, 150, 40, 200);

  ctx.fillStyle = `rgb(${treeR}, ${treeG}, ${treeB})`;
  ctx.beginPath();
  ctx.arc(65, 150, 40, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(420, 130, 50, 0, 2 * Math.PI);
  ctx.fill();

  // Person's Head
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(250, 100, 20, 0, 2 * Math.PI);
  ctx.stroke();

  // Person's Body
  ctx.beginPath();
  ctx.moveTo(250, 120);
  ctx.lineTo(250, 180);
  ctx.stroke();

  // Left leg
  ctx.beginPath();
  ctx.moveTo(250, 180);
  ctx.lineTo(240, 220);
  ctx.stroke();

  // Right Leg
  ctx.beginPath();
  ctx.moveTo(250, 180);
  ctx.lineTo(260, 220);
  ctx.stroke();

  // Left arm
  ctx.beginPath();
  ctx.moveTo(250, 140);
  ctx.lineTo(205, 120);
  ctx.stroke();

  // Right Arm
  ctx.beginPath();
  ctx.moveTo(250, 140);
  ctx.lineTo(295, 120);
  ctx.stroke();

  // Flowers
  // Red Flower
  ctx.strokeStyle = "chartreuse";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(160, 200);
  ctx.lineTo(160, 250);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(160, 225);
  ctx.lineTo(170, 220);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(160, 235);
  ctx.lineTo(150, 230);
  ctx.stroke();

  ctx.fillStyle = `rgb(${flower1R}, ${flower1G}, ${flower1B})`;
  ctx.beginPath();
  ctx.arc(160, 200, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Yellow Flower
  ctx.beginPath();
  ctx.moveTo(330, 250);
  ctx.lineTo(330, 280);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(330, 260);
  ctx.lineTo(leaf2X, 250);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(330, 265);
  ctx.lineTo(leaf3X, 260);
  ctx.stroke();

  ctx.fillStyle = `rgb(${flower2R}, ${flower2G}, ${flower2B})`;
  ctx.beginPath();
  ctx.arc(330, 240, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Purple Flower
  ctx.beginPath();
  ctx.moveTo(250, 280);
  ctx.lineTo(250, 310);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(250, 295);
  ctx.lineTo(leaf1X, 290);
  ctx.stroke();

  ctx.fillStyle = `rgb(${flower3R}, ${flower3G}, ${flower3B})`;
  ctx.beginPath();
  ctx.arc(250, 270, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Clouds
  var cloudImg = document.getElementById("cloudEl");
  ctx.drawImage(cloudImg, cloud1X, 5, 90, 90);
  ctx.drawImage(cloudImg, cloud2X, cloud2Y, 100, 100);

  // bird
  var birdImg = document.getElementById("birdEl");
  ctx.drawImage(birdImg, bird1X, 20, 70, 70);

  // Text
  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("Person Standing on Hill", 150, 390);

  // Track the amount of frames
  ctx.font = "15px Georgia";
  ctx.fillText("Frame: " + frame, 20, 20);

  // ANIMATION

  // make the leaf on purple flower move
  leaf1X = leaf1X + leaf1Xspeed;

  if (leaf1X >= 260) {
    leaf1Xspeed = -0.5;
  }

  if (leaf1X <= 240) {
    leaf1Xspeed = 0.5;
  }

  // Make the leaves on the yellow flower move
  leaf2X = leaf2X + leaf2Xspeed;
  leaf3X = leaf3X + leaf3Xspeed;

  if (leaf2X >= 320) {
    leaf2Xspeed = -0.5;
  }

  if (leaf2X <= 315) {
    leaf2Xspeed = 0.5;
  }

  if (leaf3X >= 345) {
    leaf3Xspeed = -0.5;
  }

  if (leaf3X <= 340) {
    leaf3Xspeed = 0.5;
  }

  // bird flying across the sky
  bird1X += 2;

  if (bird1X >= 500) {
    bird1X = -75;
  }

  // Cloud 1 move back and forth across the sky
  cloud1X = cloud1X + cloud1Xspeed;

  if (cloud1X >= 260) {
    cloud1Xspeed = -1;
  }

  if (cloud1X <= 120) {
    cloud1Xspeed = 1;
  }

  // Cloud 2 move across sky

  cloud2X += 3;

  if (cloud2X >= 500) {
    cloud2X = -75;
  }

  cloud2Y = 10;

  // change colour of tree leaves after a certain amount of frames
  // green-yellow: rgb(173, 255, 47)
  // dark orange: rgb(255, 140, 0)

  if (treeR <= 255 && frame >= 210) {
    treeR++;
  }

  if (treeG >= 140 && frame >= 210) {
    treeG--;
  }

  if (treeB >= 0 && frame >= 210) {
    treeB--;
  }

  // change the colour of the hill to match autumn season
  // green: rgb(0, 128, 0)
  // dark orange(brown tone): rgb(143, 98, 40)

  if (hillR <= 143 && frame >= 210) {
    hillR++;
  }

  if (hillG >= 98 && frame >= 210) {
    hillG--;
  }

  if (hillB <= 40 && frame >= 210) {
    hillB++;
  }

  // change the colour of the sky to match autumn season
  // lightblue: rgb(173, 216, 230)
  // blue: rgb(0, 128, 255)

  if (skyR >= 0 && frame >= 210) {
    skyR--;
  }

  if (skyG >= 128 && frame >= 210) {
    skyG--;
  }

  if (skyB <= 255 && frame >= 210) {
    skyB++;
  }

  requestAnimationFrame(draw);
}

// keyboard event
document.addEventListener("keypress", keyboardHandler);

function keyboardHandler(event) {
  console.log(event.code);
  if (event.code == "KeyC") {
    flower1R = Math.floor(Math.random() * 255);
    flower1G = Math.floor(Math.random() * 255);
    flower1B = Math.floor(Math.random() * 255);
    flower2R = Math.floor(Math.random() * 255);
    flower2G = Math.floor(Math.random() * 255);
    flower2B = Math.floor(Math.random() * 255);
    flower3R = Math.floor(Math.random() * 255);
    flower3G = Math.floor(Math.random() * 255);
    flower3B = Math.floor(Math.random() * 255);
  }
}
