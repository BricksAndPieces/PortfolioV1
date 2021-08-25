import { Component } from "react";
import styles from "./intro.module.css"
import Boids from "./boids";
import React from "react";

const taglines = [
	"I am a Full-Stack Developer",
	"I am an AI enthusiast",
	"I am a Honors Undergraduate Student"
];

class Intro extends Component<{}, {
	taglineIndex: number;
}> {
	private timeout?: NodeJS.Timer;

	constructor(props: any) {
		super(props);
		this.state = {
			taglineIndex: 0
		}
	}

	componentDidMount() {
		this.timeout = setInterval(() => {
			let currentIdx = this.state.taglineIndex
			this.setState({ taglineIndex: currentIdx + 1 });
		}, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.timeout!);
	}

	render() {
		let tagline = taglines[this.state.taglineIndex % taglines.length];

		return (
			<>
				<Boids/>
				<section className={styles.section}>
					<div className={styles.contentArea}>
						{/*<h4 className={styles.intro}>👋 Hi there, my name is</h4>*/}
						<h1 className={styles.name}>Ishan Shetty</h1>
						<h3 className={styles.tagline}>{ tagline }</h3>
						<div style={{marginTop: "5px"}}>
							<img width={"40px"} height={"40px"} src={"https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg"}/>
							<img width={"40px"} height={"40px"} src={"https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png"}/>
							<img width={"40px"} height={"40px"} src={"https://pngimage.net/wp-content/uploads/2018/06/logo-youtube-png-blanco-5.png"}/>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default Intro;