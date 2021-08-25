import React, { Component } from "react";
import styles from "./boids.module.css"
import p5 from "p5"

class Boids extends Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	Sketch = (p) => {

		p.setup = () => {
			p.createCanvas(window.innerWidth, window.innerHeight/1.5);
		}

		p.draw = () => {
			p.background(100);
		}
	}

	componentDidMount() {
		this.myP5 = new p5(this.Sketch, this.myRef.current)
	}

	render() {
		return (
			<div ref={this.myRef}/>
		)
	}
}

export default Boids;