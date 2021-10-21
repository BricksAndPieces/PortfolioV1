import p5 from "p5";
import ROCKET_PNG from '../../../assets/images/rocket.png'

const ROCKET_ACCEL = 0.03;

export class Rocket {
  private x: number = 0;
  private y: number = 0;
  private vy: number = 0;

  private p: p5;
  private img: p5.Image
  private particles: Particle[] = [];
  active = false;

  constructor(p: p5) {
    this.p = p;
    this.img = p.loadImage(ROCKET_PNG,
      (img: p5.Image) => img.resize(img.width/8, img.height/8))
  }

  launch(): void {
    this.y = this.p.height;
    this.vy = 0;
    this.x = this.p.random(20, this.p.width-20);
    this.active = true;
  }

  draw(p: p5): void {
    this.particles.forEach(b => b.draw(p));
    this.particles = this.particles.filter(p => p.a > 0);

    if(this.active) {
      this.vy += ROCKET_ACCEL;
      this.y -= this.vy;

      for(let i = 0; i < 5; i++) {
        this.particles.push(new Particle(this.x+this.img.width/2, this.y+this.img.height, p));
      }

      if(this.y < -300) {
        this.active = false;
      }

      p.image(this.img, this.x, this.y);
    }
  }
}

class Particle {
  private x: number;
  private y: number;
  private vx: number;
  private vy: number;
  a: number;

  constructor(x: number, y: number, p: p5) {
    this.x = x;
    this.y = y;
    this.vx = p.random(-1, 1);
    this.vy = p.random(0, 5);
    this.a = 255;
  }

  draw(p: p5) {
    this.x += this.vx;
    this.y += this.vy;
    this.a -= 10;

    p.fill(47, 100, 100, this.a);
    p.ellipse(this.x, this.y, 5, 5);
  }
}