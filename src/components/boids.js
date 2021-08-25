import React, { Component } from "react";
import styles from "./boids.module.css"
import p5 from "p5"

class Boids extends Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	Sketch = (p) => {

		const desiredSep = 25;
		const desiredAlg = 50;
		const desiredCoh = 50;

		const sepWeight = 2.5;
		const algWeight = 1.5;
		const cohWeight = 1.3;

		const maxVelocity = 2;
		const maxForce = 0.5;

		const viewRange = 50;
		const viewAngle = p.PI*0.85;

		function sub(a, b) {
			return new Vector(a.x-b.x, a.y-b.y);
		}

		class Vector {
			constructor(x, y) {
				this.x = x;
				this.y = y;
			}

			addVector(o) {
				this.x += o.x;
				this.y += o.y;
			}

			sub(o) {
				this.x -= o.x;
				this.y -= o.y;
			}

			mult(a) {
				this.x *= a;
				this.y *= a;
			}

			div(a) {
				this.x /= a;
				this.y /= a;
			}

			dist(o) {
				return p.dist(this.x, this.y, o.x, o.y);
			}

			mag() {
				return p.sqrt(this.x*this.x+this.y*this.y);
			}

			dot(o) {
				return this.x * o.x + this.y * o.y;
			}

			normalize() {
				const mag = this.mag();
				if(mag !== 0) {
					this.x /= mag;
					this.y /= mag;
				}
			}

			limit(a) {
				const mag = this.mag();
				if(mag !== 0 && mag > a) {
					this.x *= a / mag;
					this.y *= a / mag;
				}
			}

			angleBetween(o) {
				return p.acos(this.dot(o) / (this.mag() * o.mag()));
			}
		}

		class Boid {
			constructor(x, y) {
				this.pos = new Vector(x, y)
				this.vel = new Vector(p.random(-maxVelocity, maxVelocity), p.random(-maxVelocity, maxVelocity));
				this.visible = false;
			}

			movePos(others) {
				this.calculateView(others)

				this.vel.addVector(this.separation(others));
				// this.vel.addVector(this.alignment(others));
				// this.vel.addVector(this.cohesion(others));
				// this.vel.addVector(this.noise());

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

			calculateView(others) {
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

			separation(others) {
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
						steer.addVector(new Vector(diff, diff));
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

			alignment(others) {
				let steer = new Vector(0, 0);
				if(others) {
					let count = 0;
					for(let b of others) {
						if(b === this) {
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

			cohesion(others) {
				if(others) {
					return new Vector(0, 0);
				}

				let target = new Vector(0, 0);
				let count = 0;
				for(let b of others) {
					if(b === this) {
						continue;
					}

					let d = this.pos.dist(b.pos);
					if(d > 0 && d < desiredCoh) {
						target.addVector(d.pos);
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

			noise() {
				let a = new Vector(p.random(-maxForce, maxForce), p.random(-maxForce, maxForce))
				// a.mult(2);

				return a;
			}

			draw() {
				// this.x += this.vx;
				// this.y += this.vy;

				p.circle(this.pos.x, this.pos.y, 10);

				// if(this.x > window.innerWidth || this.x < 0) {
				// 	this.vx *= -1;
				// }
				// if(this.y > window.innerHeight || this.y < 0) {
				// 	this.vy *= -1;
				// }
			}
		}

		let boids = []

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
			boids.forEach(b => b.draw());
		}
	}

	componentDidMount() {
		this.myP5 = new p5(this.Sketch, this.myRef.current)
	}

	render() {
		return <div ref={this.myRef}/>
	}
}

export default Boids;