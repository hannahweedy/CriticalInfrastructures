let slider;
let imageSets = [];
let currentSet = 0;

let imgNames = [
  ["Bob1.png", "Bob2.png", "Bob3.png"],
  ["Broadln1.png", "Broadln2.png", "Broadln3.png"],
  ["Harrow1.png", "Harrow2.png", "Harrow3.png"],
  ["Rotherhithe1.png", "Rotherhithe2.png", "Rotherhithe3.png"]
]


function preload() {
  
 for( let i = 0; i < 3; i++){
  let set = [];
  for (let j = 0; j < 3; j++) {
    let img = loadImage(("images/set0" + (i + 1) + "/" + imgNames[i][j]));
    set.push(img);
  }
  imageSets.push(set);
}
}

function setup() {
  createCanvas(900, 400);
  slider = createSlider(0, imgNames.length - 2,0);
  slider.position(10, 10);
}

function draw() {
  background(220);
  let currentSet = slider.value();
  let imgs = imageSets[currentSet];

  for (let i = 0; i < imgs.length; i++) {
    image(imgs[i], i * 250 + 10, 50, 200,200);
  }
}
