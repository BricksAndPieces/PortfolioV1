import p5 from "p5";

export class Moon {
  private x: number;
  private y: number;
  private speed: number;
  private size: number;

  constructor(speed: number, size: number) {
    this.speed = speed;
    this.size = size;
    this.x = -this.size;
    this.y = this.size/2 + 5;
  }

  update(): void {
    this.x += this.speed;
    if(this.x > window.innerWidth+this.size) {
      this.x = -this.size;
    }
  }

  draw(p: p5): void {
    p.fill('#FFFFAAFF');
    p.circle(this.x, this.y, this.size);
  }
}