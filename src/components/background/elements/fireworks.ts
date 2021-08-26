import p5 from "p5";

const GRAVITY = 0.1;
const FIREWORK_LIFETIME = 100;
const NUM_PARTICLES = 50;

export class FireworkSystem {
  private fireworks: Firework[];
  private launchCounter: number;

  constructor() {
    this.fireworks = [];
    this.launchCounter = 0;
  }

  draw(p: p5) {
    this.fireworks.forEach(f => f.draw(p));
  }

  update(p: p5) {
    if(p.random() < 0.01) {
      this.launchCounter += 100;
    }

    // if(p.random() < 0.1) {
    //   this.launchCounter += 100;
    // }

    if(this.launchCounter > 0) {
      this.launchCounter--;
      if(this.launchCounter % 10 == 0) {
        this.launch(p.random(100, p.width-100), p.height, p);
      }
    }

    this.fireworks.forEach(f => f.update(p));
    this.fireworks = this.fireworks.filter(f => !f.done());
  }

  launch(x: number, y: number, p: p5) {
    this.fireworks.push(new Firework(x, y, p.random(0, 360), p));
  }
}

class Firework {
  private x: number;
  private y: number;
  private vx: number;
  private vy: number;

  private h: number;
  private counter: number;
  private particles: FireworkParticle[];

  constructor(x: number, y: number, h: number, p: p5) {
    this.x = x;
    this.y = y;
    this.vx = p.random(-1, 1);
    this.vy = p.random(7, 12);

    this.h = h;
    this.particles = [];
    this.counter = 0;
  }

  update(p: p5): void {
    this.x += this.vx;
    this.y -= this.vy;
    this.vy -= GRAVITY;

    if(this.vy < -1) {
      this.counter++;
      if(this.particles.length == 0) {
        for(let i = 0; i < NUM_PARTICLES; i++) {
          this.particles.push(new FireworkParticle(this.x, this.y, this.h, p));
        }
      }
    }

    this.particles.forEach(p => p.update());
  }

  draw(p: p5) {
    if(this.vy > -0.5) {
      p.fill(this.h, 100, 100);
      p.ellipse(this.x, this.y, 5, 5);
    }

    this.particles.forEach(f => f.draw(p));
  }

  done() {
    return this.particles.length != 0 && this.particles[0].counter > FIREWORK_LIFETIME;
  }
}


class FireworkParticle {
  private x: number;
  private y: number;
  private h: number;

  private vx: number;
  private vy: number;
  counter: number;

  constructor(x: number, y: number, h: number, p: p5) {
    this.x = x;
    this.y = y;

    let r = p.random(0, 2*p.PI);
    let m = p.random(0, 2);
    this.vx = p.cos(r) * m;
    this.vy = p.sin(r) * m;

    this.h = h;
    this.counter = 0;
  }

  update() {
    this.x += this.vx;
    this.y -= this.vy;
    this.vy -= GRAVITY/2;

    this.counter++;
  }

  draw(p: p5) {
    p.fill(this.h, 100, 100, 1-(this.counter/FIREWORK_LIFETIME));
    p.ellipse(this.x, this.y, 2, 2);
  }
}