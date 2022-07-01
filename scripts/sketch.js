var sentences = []; // array for sentence objects
var parentY = 0;

var profile = []; // array for profile pictures
var dots = ["", ".", "..", "..."]; // dots array for reply animation
var dotCount = 0;
var t = 0; //time measure for typing 'snackbar'

var aBeeZee; // font

var inp1; // current user answer in text field
var retry; // retry button
var next; // next button
var replies = [];

var error; // error switch
var correct; // correct answer switch
var correctCount = 0;
var errorCount = 0;

var boxPosYSt = 500;

var r1T = 0; // reply time counter
var r1Tt = 150; // reply time target
var r2T = 0;
var r2Tt = 166;
var r3T = 0;
var r3Tt = 157;
var r4T = 0;
var r4Tt = 140;
var replying = false; // bot replying switch to prevent interaction

var mNo = 0; //message count

var spacing = 20; // space after each box
var lSpacing = 23; // y pos of txt relative to box

var rW; //score tally anim start value
var rY;
var rTime = 0;

var popSound; // bot post sound effect
var played = false;

var blip; // user post sound effect
var blipPlayed = false;

var wrong; // wrong answer sound effect
var wrongPlayed = false;

var dragging = false; // detect inital mouse drag

function preload () {

  botImgs();
  popSound = loadSound('assets/Household Plunger Pop 28.wav');
  blip = loadSound('assets/blip.mp3');
  wrong = loadSound('assets/error.mp3');
  
  aBeeZee = loadFont('assets/ABeeZee-Regular.ttf');

}

function setup () {

  if (displayWidth <= 600) cnv = createCanvas(displayWidth, displayHeight);
  else cnv = createCanvas(320, displayHeight);
  x = (displayWidth - width) / 2;
  cnv.position(x);

  // models(); // mobile guides
  textFont(aBeeZee);
  botDetails();
  botBoxSetup();
  userBoxSetup();
  chooseState();
  updatePrompts();
  loadButtons();
  botReply(greet); // initial greeting

}

function mouseDragged (event) {

  if (!offScreenTop() || !offScreenBottom()) {
    parentY = event.movementY;
    if (sentences[0].y > 5 && event.movementY > 0) parentY = 0;
    if ((sentences[sentences.length - 1].y + sentences[sentences.length - 1].bH) < 480 && event.movementY < 0) parentY = 0;
    sentences.forEach(s => s.scroll());
  }

}

function offScreenTop () {

  return sentences.every(s => s.y > 0);

}

function offScreenBottom () {

  return sentences.every(s => (s.y + s.bH) < 500);

}

function keyPressed () {

  if (keyCode === ENTER && !correct && !error && !replying) {
    messaged();
  }

}

function draw () {

  background(255);
  // mobileLines();
  sentences.forEach(s => s.display());
  bottomBar();
  firstReply();
  secondReply();
  thirdReply();
  fourthReply();
  correctMsg();
  tryAgain();
  scoreTally();
  offerPrompt();
  if (replying) typing();
  else t = 0;

}

function bottomBar () {

  rectMode(CORNER);
  fill(255);
  rect(0, 490, cnv.width,  600);

}

function correctMsg () {

  if (correct) {
    if (!blipPlayed) {
      blip.play();
      blipPlayed = true;
    }
    fill(12, 121, 76);
    textAlign(CENTER);
    text("Well done!", width/2, promptY);
    correctCount++;
    if (correctCount == 50) {
      correct = false;
      blipPlayed = false;
      correctCount = 0;
      mNo++;
    }
  }

}

function tryAgain () {

  if (error) {
    if (!wrongPlayed) {
      wrong.play();
      wrongPlayed = true;
    }
    fill(255, 0, 0);
    textAlign(CENTER);
    text("Try again!", width/2, promptY);
    errorCount++;
    if (errorCount == 50) {
      error = false;
      wrongPlayed = false;
      errorCount = 0;
    }
  }

}

function messaged () {

  if (mNo == 0) firstMessage();
  if (mNo == 1) secondMessage();
  if (mNo == 2) thirdMessage();
  if (mNo == 3) fourthMessage();
  if (mNo == 4) fifthMessage();

}

function rightAns () {

  correct = true;
  replies.push(inp1.value());
  prNo++;
  played = false;
  sendingImg = false;
  imgSent = false;
  inp1.value("");
  
}

function playPop () {

  popSound.play();
  played = true;
  if (sendingImg) imgSent = true;

}

function typing () {

  if (t < 50) t++;
  else {
    textAlign(LEFT);
    fill(0);
    let typeTxt = enmyn[rEn] + " is typing ";
    text(typeTxt + dots[Math.floor(dotCount)], width/2 - textWidth(typeTxt)/2, 575);
    dotCount < dots.length - 0.01 ? dotCount = dotCount + 0.05 : dotCount = 0;
  }

}

function scoreTally () {

  rectMode(CENTER);
  if (!correct && prNo != 4) {
    fill(0);
    rTime = 0;
    rW = 40;
    rY = 30;
  }
  else if (correct && prNo != 4) {
    fill(12, 121, 76);
    rTime++;
    if (rTime < 2) {
      rW = rW + 4;
      rY = rY + 4;
    }
    else if (rTime >= 2 && rTime < 5) {
      rW = rW + 2;
      rY = rY + 2;
    }
  }
  else {
    fill(12, 121, 76);
    noStroke();
    rTime++;
    if (rTime < 2) {
      rW = rW + 4;
      rY = rY + 4;
    }
    else if (rTime >= 2 && rTime < 5) {
      rW = rW + 2;
      rY = rY + 2;
    }
    else {
      rW = 40;
      rY = 30;
    }
  }
  strokeWeight(2);
  stroke(255);
  rect(width-30, 22.5, rW, rY, 10);

  noStroke();
  textAlign(CENTER);
  if (!correct) fill(255);
  else fill(255);
  
  text(prNo + "/" + 5, width-30, 20);

}

function gameEnd () {

  inp1.style("display", "none");
  retry.style("display", "block");
//   next.style("display", "block");

  fill(12, 121, 76);
  textAlign(CENTER);
  prompt.push("Great job!");

}

function gameRestart () {

  location.reload();

}
