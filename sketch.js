let r = 150;
let density;
let densitySlider;

let thetaMax, phiMax;
let thetaMaxSlider, phiMaxSlider;

function setup() {
  canvas = createCanvas(500, 500, WEBGL);
  canvas.parent("container");
  angleMode(DEGREES);
  colorMode(HSB);

  stroke(199, 80, 88);
  strokeWeight(3);
  noFill();

  thetaMax = createDiv();
  thetaMax.parent("container");
  thetaMaxSlider = createSlider(0, 360, 360, 10);
  thetaMaxSlider.parent("container");
  thetaMax.class("valueDisplay");
  thetaMaxSlider.class("Slider");

  phiMax = createDiv();
  phiMax.parent("container");
  phiMaxSlider = createSlider(0, 180, 180, 10);
  phiMaxSlider.parent("container");
  phiMax.class("valueDisplay");
  phiMaxSlider.class("Slider");

  density = createDiv();
  density.parent("container");
  densitySlider = createSlider(3, 62, 24, 1);
  densitySlider.parent("container");
  density.class("valueDisplay");
  densitySlider.class("Slider");
}

function draw() {
  background(230, 50, 15);
  orbitControl(4, 4);

  rotateY(90);
  rotateZ(65);
  for (
    let phi = 0;
    phi < phiMaxSlider.value();
    phi += 180 / densitySlider.value()
  ) {
    beginShape();
    for (
      let theta = 0;
      theta < thetaMaxSlider.value();
      theta += 360 / densitySlider.value()
    ) {
      let x = r * cos(phi);
      let y = r * sin(phi) * sin(theta);
      let z = r * sin(phi) * cos(theta);
      vertex(x, y, z);
    }
    endShape(CLOSE);
  }
  thetaMax.html("Theta max value: " + thetaMaxSlider.value());
  phiMax.html("Phi max value: " + phiMaxSlider.value());

  let displayDensity = int(map(densitySlider.value(), 3, 62, 1, 60));
  density.html("Density value: " + displayDensity);
}
function windowResized() {
  resizeCanvas(600, 600);
}
