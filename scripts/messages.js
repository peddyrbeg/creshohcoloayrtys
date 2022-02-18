var ans1;
var ans2 = [/shen kayt/i, /shen moddey/i];
var ans3a = [/she kayt/i, /she moddey/i];
var ans3b = [/bane/i, /dhone/i, /doo/i, /lheeah/i, /ruy/i, /vane/i]; // special lenited case at end for 'kayt vane'
var ans3c = [/ee/i, /eh/i];
var ans4 = /she gleashtan eh/i;
var ans5a1 = /she/i
var ans5a2 = /cha nee/i;
var ans5b = /she gleashtan/i;
var ans5c = [/bwee/i, /dhone/i, /doo/i, /geayney"/i, /gorrym/i, /jiarg/i];
var ans5d = /eh/i;
var ansX; // user answer x position
var ansTX;
var userBkgr; // user box colour
var ranProm;

function userBoxSetup () {

  ansX = width - 20;
  ansTX = ansX - 25;
  userBkgr = color(25, 153, 242);

}

function chooseState () {

  ranProm = Math.floor(random(0, 3));
  if (ranProm == 0) ans1 = /ta mee mie dy liooar/i;
  else if (ranProm == 1) ans1 = /cha noddym gaccan/i;
  else ans1 = /ta mee feer vie/i;

}

function firstMessage () {

  if (ans1.test(inp1.value())) {
    rightAns();
    userReply();
  }
  else {
    error = true;
  }

}

function secondMessage () {

  if (ans2[baagh].test(inp1.value())) {
    rightAns();
    userReply();
  }
  else {
    error = true;
  }

}

function thirdMessage () {

  let lenite;
  baagh == 0 && bColor == 0 ? lenite = 5 : lenite = bColor; // check to lenite if 'kayt vane'
  if (ans3a[baagh].test(inp1.value()) && ans3b[lenite].test(inp1.value()) && ans3c[baagh].test(inp1.value())) {
    rightAns();
    userReply();
  }
  else {
    error = true;
  }

}

function fourthMessage () {

  if (ans4.test(inp1.value())) {
    rightAns();
    userReply();
  }
  else {
    error = true;
  }

}

function fifthMessage () {

  if (r2 == r3 && ans5a1.test(inp1.value()) && ans5b.test(inp1.value()) && ans5c[r2].test(inp1.value()) && ans5d.test(inp1.value())) {
    rightAns();
    userReply();
    gameEnd();
  }
  else if (r2 != r3 && ans5a2.test(inp1.value()) && ans5b.test(inp1.value()) && ans5c[r2].test(inp1.value()) && ans5d.test(inp1.value())) {
    rightAns();
    userReply();
    gameEnd();
  }
  else {
    error = true;
  }

}

function userReply () {

  sentences.push(new Sentence(1, ansX, userBkgr, replies[replies.length - 1], ansTX));
  sentences.forEach(s => s.moveBox());

}