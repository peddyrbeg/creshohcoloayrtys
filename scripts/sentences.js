let senCount = 0;

class Sentence {
	
	constructor (s, x, f, t, tx, img) {

		this.s = s; // who said it (0 = computer / 1 = user)
		this.x = x;
		this.f = f; // fill
		textSize(16);
		this.t = t; // text
		if (t == "") this.type = "img";
		else this.type = "sen"; // image or sentence
		this.tx = tx; // text x-pos
		this.img = img;
		this.tW = textWidth(this.t);
		this.bW = this.tW + 50; // box width
		this.bH = 30 + Math.ceil(this.bW/200)*20; // calculates how many times an extra 20px needs to be added to the box height (start box is 30px + 20px = 50px)
		if (this.type == "sen") this.totH = this.bH + spacing;
		else if (this.type == "img") this.totH = this.img.height + imgSpY;
		this.y = boxPosYSt - this.totH;
		if (this.bH > 50) this.bW = 230;
		if (this.s == 1) {
			this.bW = ansX - this.bW;
			this.bH = boxPosYSt-spacing;
			this.tx = this.bW + 25;
		}
		this.n = senCount;
		senCount++;

	}

	moveBox () {

		if (this.n < sentences.length - 1) {
			this.y -= sentences[sentences.length-1].totH;
			if (this.s == 1) this.bH -= sentences[sentences.length-1].totH;
		}

	}

	scroll () {

		this.y += parentY;
		if (this.s == 1) this.bH += parentY;

	}


	display () {

		noStroke();
		fill(this.f);
		if (this.s == 0) {
			image(profile[rEn], this.x - profPicSpX, this.y + profPicSpY);
			rectMode(CORNER);
		}
		else rectMode(CORNERS);

		if (this.type == "sen") {
			rect(this.x, this.y, this.bW, this.bH, 10);
			fill(255);
			textAlign(LEFT, CENTER);
			textSize(16);
			text(this.t, this.tx, this.y + lSpacing, 200);
		}
		if (this.type == "img") {
			image(this.img, this.tx, this.y + lSpacing);
		}
	}

}