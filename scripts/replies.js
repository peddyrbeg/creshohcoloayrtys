var enmyn = ["Aalish", "Juan", "Blay", "Erin", "Josef", "Freya", "Maayl", "Jamys", "Breeshey", "Catreeney"];
var rEn; // random bot name
var buill = ["Rhumsaa", "Doolish", "Balley Chashtal", "Purt ny h-Inshey", "Laksaa", "Purt Çhiarn", "Purt le Moirrey"];
var rBu; // random placename
var greet = ["Kys t'ou jiu?"];
// picture to display
var beayn = [];
var baagh; // binary for cat or dog (see setImgs())
var bColors = ["white", "brown", "black", "grey", "ginger"];
var bColor; // color of randomly chosen animal
var gleashtan = [];
var gColors = ["bwee", "dhone", "doo", "geayney", "gorrym", "jiarg"];
var carRight; // binary for whether colour asked matches car
var pic = [];
var r1; // random animal pic selection
var r2; // random car pic selection
var r3; // random car colour selection for bot question
var ranTraa;
var repX; // bot reply x position
var repTX;
var profPicSpX = 45; // bot pic relative x pos
var profPicSpY = 7.5; // bot pic relative y pos
var botBkgr; // bot box colour
var sendingImg = false; // switch to separate img from text
var imgSent = false; // switch to allow img to send
var imgSpY = 30; // height adjustment to bring img above txt input bar
var imgDelay = 150; // time to wait before sending img after txt
var del = imgDelay; // actual image delay timer;

function botImgs () {

  profile[0] = loadImage('assets/aalish.png');
  profile[2] = loadImage('assets/blay.png');
  profile[8] = loadImage('assets/breeshey.png');
  profile[3] = loadImage('assets/erin.png');
  profile[5] = loadImage('assets/freya.png');
  profile[7] = loadImage('assets/jamys.png');
  profile[4] = loadImage('assets/josef.png');
  profile[1] = loadImage('assets/juan.png');
  profile[6] = loadImage('assets/maayl.png');
  profile[9] = loadImage('assets/catreeney.png');

  beayn[0] = loadImage('assets/kayt_bane.png');
  beayn[1] = loadImage('assets/kayt_dhone.png');
  beayn[2] = loadImage('assets/kayt_doo.png');
  beayn[3] = loadImage('assets/kayt_lheeah.png');
  beayn[4] = loadImage('assets/kayt_ruy.png');
  beayn[5] = loadImage('assets/moddey_bane.png');
  beayn[6] = loadImage('assets/moddey_dhone.png');
  beayn[7] = loadImage('assets/moddey_doo.png');
  beayn[8] = loadImage('assets/moddey_lheeah.png');
  beayn[9] = loadImage('assets/moddey_ruy.png');

  gleashtan[0] = loadImage('assets/gleashtan_bwee.png');
  gleashtan[1] = loadImage('assets/gleashtan_dhone.png');
  gleashtan[2] = loadImage('assets/gleashtan_doo.png');
  gleashtan[3] = loadImage('assets/gleashtan_geayney.png');
  gleashtan[4] = loadImage('assets/gleashtan_gorrym.png');
  gleashtan[5] = loadImage('assets/gleashtan_jiarg.png');

  r1 = floor(random(0, beayn.length));
  r2 = floor(random(0, gleashtan.length));
  r3 = floor(random(0, gColors.length));

  r2 == r3 ? carRight = 0 : carRight = 1; // tell prompt whether they should say 'yes' or 'no' when asked car colour

  setImgs(r1, r2);

}

function setImgs (b, g) {

  if (b <= 4) {
    baagh = 0;  // cat
    bColor = b;
  }
  else {
    baagh = 1; // dog
    bColor = b - 5; // adjust the color back for dogs
  }

  pic[0] = beayn[b];
  pic[1] = gleashtan[g];

}

function botDetails () {

  rEn = Math.floor(random(0, 10));
  rBu = Math.floor(random(0, 7));

}

function botBoxSetup () {

  repX = width/2 - 105;
  repTX = repX + 20;
  botBkgr = color(230, 102, 13);

}

function firstReply () {

    if (prNo == 1) {
      if (r1T < r1Tt) {
        r1T++;
        replying = true;
      }
      else {
        botReply("Feer vie. Cre ta shoh?");
        if (del > 0 && !imgSent) del--;
        else {
          if (!sendingImg) botReplyImg(pic[0]);
          replying = false;
        }
      }
  }

}

function secondReply () {

    if (prNo == 2) {
      if (r2T < r2Tt) {
        r2T++;
        replying = true;
      }
      else {
        replying = false;
        let q;
        baagh == 0 ? q = "chayt" : q = "voddey";
        botReply("Ah. Cre'n daah t'er y " + q + "?");
      }
    }

}

function thirdReply () {

  if (prNo == 3) {
    if (r3T < r3Tt) {
      r3T++;
      replying = true;
    }
    else {
      botReply("Ah, shen eh! As cre ta shoh?");
      if (del > 0 && !imgSent) del--;
      else {
        if (!sendingImg) botReplyImg(pic[1]);
        replying = false;
      }
    }
  }

}

function fourthReply () {

  if (prNo == 4) {
    if (r4T < r4Tt) {
      r4T++;
      replying = true;
    }
    else {
      replying = false;
      botReply("Nee gleashtyn " + gColors[r3] + " eh?");
    }
  }

}

function botReply (t) {

  if (!played) {
    sentences.push(new Sentence(0, repX, botBkgr, t, repTX));
    playPop();
    sentences.forEach(s => s.moveBox());
  }
}

function botReplyImg (img) {

  sendingImg = true;

  if (!imgSent) {
    sentences.push(new Sentence(0, repX, botBkgr, "", repTX, img));
    playPop();
    del = imgDelay;
    sentences.forEach(s => s.moveBox());
  }

}