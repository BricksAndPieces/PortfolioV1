import React, { Component } from "react";
import styles from "./boids.module.css";
import p5 from "p5";

class Boids extends Component {
	private readonly myRef: React.RefObject<any>;
	private myP5?: p5;

	constructor(props: any) {
		super(props);
		this.myRef = React.createRef();
	}

	Sketch = (p: p5) => {

		const desiredSep = 25;
		const desiredAlg = 50;
		const desiredCoh = 50;

		const sepWeight = 2.5;
		const algWeight = 1.5;
		const cohWeight = 0.5;
		const noiseWeight = 0.5;

		const maxVelocity = 10;
		const maxForce = 0.5;

		const viewRange = 50;
		const viewAngle = p.PI*0.85;

		function sub(a: Vector, b: Vector) {
			return new Vector(a.x-b.x, a.y-b.y);
		}

		class Vector {
			x: number;
			y: number;

			constructor(x: number, y: number) {
				this.x = x;
				this.y = y;
			}

			addVector(o: Vector): void {
				this.x += o.x;
				this.y += o.y;
			}

			sub(o: Vector): void {
				this.x -= o.x;
				this.y -= o.y;
			}

			mult(a: number): void {
				this.x *= a;
				this.y *= a;
			}

			div(a: number): void {
				this.x /= a;
				this.y /= a;
			}

			dist(o: Vector): number {
				return p.dist(this.x, this.y, o.x, o.y);
			}

			mag(): number {
				return p.sqrt(this.x*this.x+this.y*this.y);
			}

			dot(o: Vector): number {
				return this.x * o.x + this.y * o.y;
			}

			normalize(): void {
				const mag = this.mag();
				if(mag !== 0) {
					this.x /= mag;
					this.y /= mag;
				}
			}

			limit(a: number): void {
				const mag = this.mag();
				if(mag !== 0 && mag > a) {
					this.x *= a / mag;
					this.y *= a / mag;
				}
			}

			angleBetween(o: Vector): number {
				return p.acos(this.dot(o) / (this.mag() * o.mag()));
			}

			heading(): number {
				return p.atan2(this.y, this.x);
			}
		}

		class Boid {
			private readonly pos: Vector;
			private readonly vel: Vector;
			private visible: boolean;

			constructor(x: number, y: number) {
				this.pos = new Vector(x, y)
				this.vel = new Vector(p.random(-maxVelocity, maxVelocity), p.random(-maxVelocity, maxVelocity));
				this.visible = false;
			}

			movePos(others: Boid[]): void {
				this.calculateView(others)

				this.vel.addVector(this.separation(others));
				this.vel.addVector(this.alignment(others));
				this.vel.addVector(this.cohesion(others));
				this.vel.addVector(this.noise());

				this.vel.limit(maxVelocity);
				this.pos.addVector(this.vel);

				if(this.pos.x > window.innerWidth) {
					this.pos.x = this.pos.x - window.innerWidth;
				}
				if(this.pos.x < 0) {
					this.pos.x = window.innerWidth + this.pos.x;
				}
				if(this.pos.y > window.innerHeight) {
					this.pos.y = this.pos.y - window.innerWidth;
				}
				if(this.pos.y < 0) {
					this.pos.y = window.innerHeight + this.pos.y;
				}
			}

			calculateView(others: Boid[]): void {
				if(!others) return;

				for(let b of others) {
					b.visible = false;
					if(this === b)
						continue;

					if(this.pos.dist(b.pos) > viewRange)
						continue;

					let lineOfSight = sub(b.pos, this.pos);
					let angleOfSight = lineOfSight.angleBetween(this.vel);
					if(angleOfSight < viewAngle)
						b.visible = true;
				}
			}

			separation(others: Boid[]): Vector {
				if(others.length === 0) {
					return new Vector(0, 0);
				}

				let steer = new Vector(0, 0);

				let count = 0;
				for(let b of others) {
					if(!b.visible) {
						continue;
					}

					let d = this.pos.dist(b.pos);
					if(d < desiredSep) {
						const diff = sub(this.pos, b.pos);
						diff.normalize();
						diff.div(d);
						// console.log(this.pos, b.pos, diff);
						steer.addVector(diff);
						count++;
					}
				}

				if(count > 0) {
					steer.div(count);
				}

				if(steer.mag() > 0) {
					steer.normalize();
					steer.mult(maxVelocity);
					steer.sub(this.vel);
					steer.limit(maxForce);
				}

				steer.mult(sepWeight);
				return steer;
			}

			alignment(others: Boid[]): Vector {
				let steer = new Vector(0, 0);
				if(others) {
					let count = 0;
					for(let b of others) {
						if(!b.visible) {
							continue;
						}

						let d = this.pos.dist(b.pos);
						if(d < desiredAlg) {
							steer.addVector(b.vel);
							count++;
						}
					}

					if(count > 0) {
						steer.div(count);
						steer.normalize();
						steer.mult(maxVelocity);
						steer.sub(this.vel);
						steer.limit(maxForce);
					}
				}

				steer.mult(algWeight);
				return steer;
			}

			cohesion(others: Boid[]): Vector {
				if(!others) {
					return new Vector(0, 0);
				}

				let target = new Vector(0, 0);
				let count = 0;
				for(let b of others) {
					if(!b.visible) {
						continue;
					}

					let d = this.pos.dist(b.pos);
					if(d > 0 && d < desiredCoh) {
						target.addVector(b.pos);
						count++;
					}
				}

				if(count === 0) {
					return target;
				}else {
					target.div(count);
				}

				let steer = sub(target, this.pos);
				steer.normalize();
				steer.mult(maxVelocity);
				steer.sub(this.vel);
				steer.limit(maxForce);
				steer.mult(cohWeight);

				return steer;
			}

			noise(): Vector {
				let a = new Vector(p.random(-1, 1), p.random(-1, 1))
				a.mult(noiseWeight);

				return a;
			}

			drawBoid(): void {
				// this.x += this.vx;
				// this.y += this.vy;

				// p.circle(this.pos.x, this.pos.y, 10);

				let r = 3;

				let theta = this.vel.heading() + p.radians(90);
				// p.fill(127);
				// p.stroke(200);
				p.push();
				p.translate(this.pos.x, this.pos.y);
				p.rotate(theta);
				p.beginShape();
				p.vertex(0, -r * 2);
				p.vertex(-r, r * 2);
				p.vertex(r, r * 2);
				p.endShape(p.CLOSE);
				p.pop();

				// if(this.x > window.innerWidth || this.x < 0) {
				// 	this.vx *= -1;
				// }
				// if(this.y > window.innerHeight || this.y < 0) {
				// 	this.vy *= -1;
				// }
			}
		}

		let boids: Boid[] = []

		p.setup = () => {
			p.createCanvas(window.outerWidth, window.innerHeight);
			console.log('x');

			for(let x = 0; x < 100; x++) {
				boids.push(new Boid(p.random(0, window.innerWidth), p.random(0, window.innerHeight)));
				console.log('x');
			}

			p.noStroke();
		}

		p.draw = () => {
			p.background('#183D47');

			p.fill('#185a61');
			boids.forEach(b => b.movePos(boids))
			boids.forEach(b => b.drawBoid());
		}
	}

	componentDidMount() {
		this.myP5 = new p5(this.Sketch, this.myRef.current)
	}

	render() {
		return <div className={styles.canvasBackground} ref={this.myRef}/>
	}
}

export default Boids;