var traa = ["Good morning!", "Good afternoon!", "Good day!"];
var stayd = ["I'm ok.", "I can't complain.", "I'm very well!"];
var prompt = [];
var animal = ["cat", "dog"];
var carCol = ["yellow", "brown", "black", "green", "blue", "red"];
var rightCol = ["yes", "no"]; // did the bot ask the right colour?
var promptY = 575; // prompt y pos
var prNo = 0; // prompt count

function updatePrompts () {

  prompt = ["Say, '" + stayd[ranProm], "Say 'that's a " + animal[baagh] + "' in Manx.", "Say, 'it's a " + bColors[bColor] + " " + animal[baagh] + "' in Manx.", "Say, 'it's a car' in Manx.", "Say, '" + rightCol[carRight] + ", it's a " + carCol[r2] + " car' in Manx."];

}

function offerPrompt () {

	if (!correct && !error && !replying) {
	    fill(0);
	    textAlign(CENTER);
	    rectMode(CENTER);
	    text(prompt[prNo], width/2, promptY, 300);
  	}

}