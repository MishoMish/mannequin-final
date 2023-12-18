class Ufo extends THREE.Group {
  constructor() {
    super();

    var glassMaterial = new THREE.MeshPhongMaterial({
      color: "azure",
      opacity: 0.7,
      transparent: true,
      shininess: 50,
      specular: 0x8080ff,
      side: THREE.BackSide,
    });
    var glass = new THREE.Mesh(
      new THREE.SphereGeometry(25, 64, 16, 0, 2 * Math.PI, 0, 0.5 * Math.PI),
      glassMaterial
    );

    var shipMaterialPrimary = new THREE.MeshBasicMaterial({ color: "black" });
    var shipMaterialSecondary = new THREE.MeshBasicMaterial({ color: "white" });

    var bottomHalfSphere = glass.clone();
    bottomHalfSphere.material = shipMaterialPrimary;
    bottomHalfSphere.material.side = THREE.DoubleSide;
    bottomHalfSphere.rotation.x = Math.PI;
    bottomHalfSphere.castShadow = true;

    var shipFloor = new THREE.Mesh(
      new THREE.CircleGeometry(25, 32),
      shipMaterialSecondary
    );
    shipFloor.material.side = THREE.DoubleSide;
    shipFloor.rotation.x = Math.PI / 2;

    var outsideRing = new THREE.Group();
    var outsideRingBottom = bottomHalfSphere.clone();
    outsideRingBottom.scale.set(3, 0.3, 3);
    outsideRing.add(outsideRingBottom);
    var outsideRingTop = outsideRingBottom.clone();
    outsideRingTop.rotation.z = Math.PI;
    outsideRing.add(outsideRingTop);

    outsideRing.position.y -= 8;

    var chair = new Chair(-90);
    chair.scale.set(0.7, 0.9, 0.6);

    var beam = new Beam(100, "white");
    beam.position.y -= 65;

    var screen = new Screen(10, 7.5);
    screen.position.y += 15;
    screen.position.z += 10;

    Mannequin.colors = [
      "lightgreen",
      "lightgreen",
      "green",
      "green",
      "darkgreen",
      "darkgreen",
      "darkGreen",
    ];
    this.alien = new Alien();
    this.alien.position.y += 11.5
    this.alienPostures = [
      {
        version: 7,
        data: [
          [0, -13.5, 0],
          [-4.7, -90, 0],
          [0, 0, -10.5],
          [0, 0, -10.3],
          [4.1, 25.2, 94.4],
          [89.6],
          [-6, -6, -0.6],
          [-5.1, -11.6, 94.3],
          [89.1],
          [6, 6, 4.6],
          [11.7, 1.6, 24.6],
          [95.4],
          [14.6, 0, 0],
          [-90, 70, 71.9, 0, 15.8, 0, 38.9],
          [0, 0, 10.2, 0, 22.3, 0, 112],
          [0, 0, 2.5, 0, 50.5, 0, 70.2],
          [0, 0, 3.6, 0, 46, 0, 60.6],
          [0, 0, 2.5, 0, 38.6, 0, 65.8],
          [-20.2, -3.1, 15.4],
          [97.7],
          [-7.8, 0, 0],
          [90, -70, 62.5, 0, 37.7, 0, 10],
          [0, 0, 10, 0, 53.4, 0, 69.5],
          [0, 0, 10, 0, 78.4, 0, 60.2],
          [0, 0, 10, 0, 71.4, 0, 89.5],
          [0, 0, 10, 0, 83.4, 0, 65.8],
        ],
      },
      {"version":7,"data":[[0,-13.5,0],[-4.7,-90,0],[0,0,-10.5],[0.5,-0.1,1.5],[4.1,25.2,94.4],[89.6],[-6,-6,-0.6],[-5.1,-11.6,94.3],[89.1],[6,6,4.6],[7.3,-1.4,34.7],[86.4],[23.8,0,10.9],[-90,70,71.9,0,15.8,0,38.9],[0,0,2.6,0,2.2,0,0],[0,0,2.5,0,50.5,0,70.2],[0,0,3.6,0,46,0,60.6],[0,0,2.5,0,38.6,0,65.8],[-20.2,-3.1,12],[70.1],[-7.8,0,0],[90,-70,62.5,0,37.7,0,10],[0,0,10,0,53.4,0,69.5],[0,0,10,0,78.4,0,60.2],[0,0,10,0,71.4,0,89.5],[0,0,10,0,83.4,0,65.8]]},
      {"version":7,"data":[[0,-13.5,0],[-4.7,-90,0],[0,0,-10.5],[0,0,-10.3],[4.1,25.2,94.4],[89.6],[-6,-6,-0.6],[-5.1,-11.6,94.3],[89.1],[6,6,4.6],[11.7,1.6,34.7],[86.4],[-1.5,0,0],[-90,70,71.9,0,15.8,0,38.9],[0,0,2.6,0,2.2,0,0],[0,0,2.5,0,50.5,0,70.2],[0,0,3.6,0,46,0,60.6],[0,0,2.5,0,38.6,0,65.8],[-20.2,-3.1,15.4],[97.7],[-7.8,0,0],[90,-70,62.5,0,37.7,0,10],[0,0,10,0,53.4,0,69.5],[0,0,10,0,78.4,0,60.2],[0,0,10,0,71.4,0,89.5],[0,0,10,0,83.4,0,65.8]]},
      {"version":7,"data":[[0,-13.5,0],[-4.7,-90,0],[0,0,-10.5],[0.5,-0.1,1.5],[4.1,25.2,94.4],[89.6],[-6,-6,-0.6],[-5.1,-11.6,94.3],[89.1],[6,6,4.6],[7.3,-1.4,52.5],[75.9],[-0.3,-4.5,10],[-90,70,71.9,0,15.8,0,38.9],[0,0,2.6,0,2.2,0,0],[0,0,2.5,0,50.5,0,70.2],[0,0,3.6,0,46,0,60.6],[0,0,2.5,0,38.6,0,65.8],[-20.2,-3.1,74.9],[46.7],[-28.5,0,0],[90,-70,62.5,0,37.7,0,10],[0,0,-9.9,0,0.5,0,6.7],[0,0,10,0,78.4,0,60.2],[0,0,10,0,71.4,0,89.5],[0,0,10,0,83.4,0,65.8]]}

      
    ];
    this.alien.posture = this.alienPostures[0];
    this.alienPostureIndex = 0;
    this.isInMovement = false;
    this.changeHolder = 0;

    this.add(
      glass,
      bottomHalfSphere,
      shipFloor,
      outsideRing,
      chair,
      this.alien,
      screen,
      beam
    );

    const addLights = (height, radius, radiusCyrcle, numCyrcles, color) => {
      var sphere = new THREE.Mesh(
        new THREE.SphereGeometry(radiusCyrcle, 32, 16),
        new THREE.MeshStandardMaterial({
          color: color,
          roughness: 0.25,
          metalness: 0.52,
          emissive: color,
        })
      );

      for (var i = 0; i < numCyrcles; i++) {
        sphere = sphere.clone();
        sphere.position.set(
          radius * Math.sin((i * (2 * Math.PI)) / numCyrcles),
          height,
          radius * Math.cos((i * (2 * Math.PI)) / numCyrcles)
        );
        this.add(sphere);
      }
    };

    addLights(-4.5, 60, 2, 9, "red");
    addLights(-11.5, 60, 2, 9, "green");
    addLights(-2, 30, 2, 3, "blue");
  }

  animate = function (t) {
    this.position.y += sin(t) / 10;

    var nextPostureIndex = this.alienPostureIndex + 1;
    if (nextPostureIndex >= this.alienPostures.length) {
      nextPostureIndex = 0;
    }
    // For stops at each end:
    var k = THREE.MathUtils.clamp(0.5 + sin(t), 0, 1);

    if (k >= 0.05 && k <= 0.95) {
      this.isInMovement = true;
    }

    if (this.changeHolder % 2 == 1) {
      this.alien.posture = Mannequin.blend(
        this.alienPostures[nextPostureIndex],
        this.alienPostures[this.alienPostureIndex],
        k
      );
    } else {
      this.alien.posture = Mannequin.blend(
        this.alienPostures[this.alienPostureIndex],
        this.alienPostures[nextPostureIndex],
        k
      );
    }

    if ((k >= 0.98 || k <= 0.02) && this.isInMovement) {
      this.alienPostureIndex = nextPostureIndex;
      this.isInMovement = false;
      this.changeHolder++;
    }
  };
}
