var myRec = new p5.SpeechRec;
let dancingWords = [];
myFonts = ["UnifrakturCook", "Dokdo", "Bebas Neue"];


myRec.continuous = true;
myRec.interimResults = true;



class DanceSpan {
  constructor(element, x, y) {
    element.position(x, y);
    this.element = element;
    this.x = x;
    this.y = y;
  }

  brownian() {

let r=0
r+=0.5
    this.x += random(-r,r);
    this.y += random(-r,r);
let mouse1 =random(mouseX/50, mouseX/20)
let mouse2 =random(mouseX/50, mouseX/20)
    this.element.position(this.x-mouse1, this.y+mouse2);
  }
}
function setup() {
	frameRate(30)
	createCanvas(windowWidth, windowHeight);

	fill(255);

	textSize(width / 10);
	textAlign(CENTER);
  textFont("Montserrat")
text("shout whatever!", width / 2, height / 2);
textSize(32);
text("(refresh to reset)", width / 2, height / 1.8);

	myRec.onResult = showResult;

	myRec.start();


}

function draw() {

  for (let i = 0; i < dancingWords.length; i++) {
    dancingWords[i].brownian();
  }
  if (frameCount > 60){

    background(255, 77, 29, 10)}

}

function showResult() {

	if (myRec.resultValue === true) {


    myP = createP(
      myRec.resultString
    ).addClass('text').hide();

    const texts = selectAll('.text');

      for (let i = 0; i < texts.length; i++) {
        const paragraph = texts[i].html();
        const words = paragraph.split(' ');
        for (let j = 0; j < words.length; j++) {
          const spannedWord = createSpan(words[j]);
          spannedWord.style('font-size', random(40,220) + "px" )

          spannedWord.style('font-family', myFonts[int(random(0, myFonts.length))] )
          let  Xposition = windowWidth-windowWidth/6;
          let  Yposition = windowHeight-windowHeight/6;
          console.log(Xposition)
          const dw = new DanceSpan(spannedWord, random(Xposition), random(Yposition));
          dancingWords.push(dw);

        }

      }

	}
}
function mousePressed() {
  span.remove()
  console.log("wow")

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
