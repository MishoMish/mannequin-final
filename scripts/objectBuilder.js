class Chair extends THREE.Group {
  constructor() {
    super();

    Mannequin.colors[4] = "white";

    var seat = new LimbShape(false, [16, 10, 16, 0, 500, 1, 0.3, 1], 20, 20);

    var cussion = new THREE.Mesh(
      new THREE.SphereGeometry(6.8, 20, 10, 0, 2 * Math.PI, 0, Math.PI / 2),
      new THREE.MeshPhongMaterial({ color: "gray" })
    );
    cussion.scale.set(1, 0.25, 1);
    cussion.position.set(0, 4, 0);

    this.add(seat, cussion);
  }
}

class Beam extends THREE.Mesh {
  constructor(length, color) {
    super(
      new THREE.CylinderGeometry(7.5, 20, length, 32),
      new THREE.MeshPhongMaterial({
        color: color,
        opacity: 0.15,
        transparent: true,
        side: THREE.FrontSide,
      })
    );
  }
}

class Screen extends THREE.Mesh {
  constructor(sizeX, sizeY) {
    super(
      new THREE.PlaneGeometry(sizeX, sizeY),
      new THREE.MeshPhongMaterial({
        color: "lime",
        opacity: 0.75,
        transparent: true,
        side: THREE.DoubleSide,
      })
    );
    var screenEdge = new THREE.Mesh(
      new THREE.PlaneGeometry(sizeX + 1, sizeY + 1),
      new THREE.MeshPhongMaterial({
        color: "black",
        opacity: 0.75,
        transparent: true,
        side: THREE.DoubleSide,
      })
    );
    screenEdge.position.z += 0.2;
    this.add(screenEdge);
  }
}

class ChristmasHat extends THREE.Group {
  constructor() {
    super();
    var cone = new THREE.Mesh(
      new THREE.CylinderGeometry(3.5, 0, 10, 32),
      new THREE.MeshPhongMaterial({ color: "red" })
    );

    var ring = new THREE.Mesh(
      new THREE.TorusGeometry(3.5, 1, 16, 100),
      new THREE.MeshPhongMaterial({ color: "white" })
    );
    ring.rotation.x += Math.PI / 2;
    ring.position.y += 5;
    cone.add(ring);

    var ball = new THREE.Mesh(
      new THREE.SphereGeometry(1, 16, 16),
      new THREE.MeshPhongMaterial({ color: "white" })
    );
    ball.position.y -= 5;
    cone.add(ball);

    cone.rotation.x += Math.PI;
    cone.position.y += 9.5;
    this.add(cone);
  }
}

class AlienAtributes extends THREE.Group {
  constructor() {
    super();
    var alienHeadAttribute1 = new THREE.Group();
    var headRod = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.3, 4, 16),
      new THREE.MeshBasicMaterial({ color: "lightGreen" })
    );
    headRod.castShadow = true;
    headRod.position.y += 6;
    var rodEndSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 16),
      new THREE.MeshBasicMaterial({ color: "darkred" })
    );
    rodEndSphere.castShadow = true;
    rodEndSphere.position.y += 8;
    alienHeadAttribute1.add(headRod, rodEndSphere);

    var alienHeadAttribute2 = alienHeadAttribute1.clone();

    alienHeadAttribute1.rotation.x += Math.PI / 8;
    alienHeadAttribute2.rotation.x -= Math.PI / 8;

    this.add(alienHeadAttribute1, alienHeadAttribute2);
  }
}

class Tree extends THREE.Group {
  constructor(posX, posY, posZ, scale) {
    super();

    var trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(4, 6, 75, 32),
      new THREE.MeshPhongMaterial({
        color: "brown",
      })
    );
    trunk.castShadow = true;

    var top = new THREE.Mesh(
      new THREE.SphereGeometry(25, 16, 16),
      new THREE.MeshPhongMaterial({
        color: "green",
      })
    );
    top.position.y += 30;
    top.castShadow = true;

    this.add(trunk, top);
    this.position.set(posX, posY, posZ);
    this.scale.set(scale, scale, scale);
  }
}

class Flower extends THREE.Group {
  constructor(posX, posZ, color) {
    super();

    var base = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 0.5, 3, 32),
      new THREE.MeshPhongMaterial({
        color: "lightgreen",
      })
    );
    base.castShadow = true;

    var top = new THREE.Mesh(
      new THREE.SphereGeometry(1, 4, 4),
      new THREE.MeshPhongMaterial({
        color: color,
      })
    );
    top.position.y += 1.5;
    top.castShadow = true;

    this.add(base, top);
    this.position.set(posX, -29.5, posZ);
  }
}

