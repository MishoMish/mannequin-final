class Alien extends Mannequin {
  constructor(height = 0.4) {
    super(false, height);
    this.body.position.y = 4;

    this.l_leg.straddle += 6;
    this.r_leg.straddle += 6;

    this.l_ankle.turn += 6;
    this.r_ankle.turn += 6;

    this.l_ankle.tilt += 6;
    this.r_ankle.tilt += 6;

    this.head.attach(new AlienAtributes());
  }
}

class myMale extends Male {
  constructor(
    height = 0.7,
    colorPants = "darkBlue",
    colorShirt = "blue",
    colorSkin = "#ECC9BD"
  ) {
    super(height);
    var hat = new ChristmasHat();
    this.head.attach(hat);

    this.r_leg.recolor(colorPants);
    this.l_leg.recolor(colorPants);
    this.r_knee.recolor(colorPants);
    this.l_knee.recolor(colorPants);
    this.pelvis.recolor(colorPants);

    this.torso.recolor(colorShirt);
    this.r_arm.recolor(colorShirt);
    this.l_arm.recolor(colorShirt);
    this.r_elbow.recolor(colorShirt);
    this.l_elbow.recolor(colorShirt);

    this.r_wrist.recolor(colorSkin);
    this.l_wrist.recolor(colorSkin);
    this.r_fingers.recolor(colorSkin);
    this.l_fingers.recolor(colorSkin);
    this.neck.recolor(colorSkin);
    this.head.recolor(colorSkin);
  }
}

class myFemale extends Female {
  constructor(
    height = 0.6,
    colorPants = "red",
    colorShirt = "purple",
    colorSkin = "#F0C2AA"
  ) {
    super(height);
    var hat = new ChristmasHat();
    this.head.attach(hat);

    this.r_leg.recolor(colorPants);
    this.l_leg.recolor(colorPants);
    this.r_knee.recolor(colorPants);
    this.l_knee.recolor(colorPants);
    this.pelvis.recolor(colorPants);

    this.torso.recolor(colorShirt);
    this.r_arm.recolor(colorShirt);
    this.l_arm.recolor(colorShirt);
    this.r_elbow.recolor(colorShirt);
    this.l_elbow.recolor(colorShirt);

    this.r_wrist.recolor(colorSkin);
    this.l_wrist.recolor(colorSkin);
    this.r_fingers.recolor(colorSkin);
    this.l_fingers.recolor(colorSkin);
    this.neck.recolor(colorSkin);
    this.head.recolor(colorSkin);
  }
}
