let guidesCh;
let guidesOn = true;
let filterOn = false;
let iPhone8;
let iP8on = false;
let samA12;
let samA12on = false;
let guides = 20;

function models () {

	guidesCh = createCheckbox("Guides", true);
	guidesCh.position(100, 25);
	guidesCh.changed(guidesToggle);

	iPhone8 = createCheckbox("iPhone 8", false);
	iPhone8.position(100, 50);
	iPhone8.changed(iP8);

	samA12 = createCheckbox("Samsung A12", false);
	samA12.position(100, 75);
	samA12.changed(a12);

}

function mobileLines () {

	filters();

	if (guidesOn) {

		setLineDash([10, 10]);

		textSize(20);
		textAlign(LEFT);
		for (let i = 0; i < guides; i++) {
			stroke(200);
			line(0, i * 50, cnv.width, i * 50);
			noStroke();
			fill(200);
			text(i * 50 + "px", 0, i * 50 + 15);
		}

		if (!filterOn) {
			stroke(255,0,0)
			line(0, 568, width, 568); // iPhone 5
			line(0, 667, width, 667); // iPhone 8
			line(0, 800, width, 800); // Galaxy A12
			line(0, 926, width, 926); // iPhone 12 Pro Max

			fill(255, 0, 0, 100);
			noStroke();
			text("iPhone 5", 0, 583);
			text("iPhone 8", 0, 682);
			text("Galaxy A12", 0, 815);
			text("iPhone 12 Pro Max", 0, 941);
		}

	}

}

function setLineDash(list) {

 	drawingContext.setLineDash(list);

}

function guidesToggle () {

	guidesOn ? guidesOn = false : guidesOn = true;

}

function filters () {

	setLineDash([0, 0]);

	if (iP8on) formatGrid("iPhone 8", 682, 667, 617);
	if (samA12on) formatGrid("Galaxy A12", 815, 800, 750);

}

function iP8 () {

	if (iP8on) {
		iP8on = false;
		filterOn = false;
		guides = 20;
	}
	else {
		iP8on = true;
		filterOn = true;
		guides = 14;
	}

}

function a12 () {

	if (samA12on) {
		samA12on = false;
		filterOn = false;
		guides = 20;
	}
	else {
		samA12on = true;
		filterOn = true;
		guides = 16;
	}

}

function formatGrid (t, y, h, b) {

	stroke(0);
	rectMode(CORNER);
	fill(255);
	rect(0, 0, cnv.width, h);
	fill(150);
	rect(0, b, cnv.width, 50);
	fill(255, 0, 0, 100);
	noStroke();
	textSize(20);
	textAlign(LEFT);
	text(t, 0, y);

}