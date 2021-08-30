import { Component } from "react";
import styles from "./intro.module.css"
import Boids from "./boids/boids";
import React from "react";
import AnimatedBackground from "./background/animated-background";

const taglines = [
	"Full-Stack Developer",
	"AI enthusiast",
	"Honors Undergraduate Student"
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
				{/*<Boids/>*/}
				{/*<AnimatedBackground/>*/}
				<section className={styles.section}>
					<div className={styles.contentArea}>
						{/*<h4 className={styles.intro}>👋 Hi there, my name is</h4>*/}
						<h1 className={styles.name}>Ishan Shetty</h1>
						<h3 className={styles.tagline}>{ tagline }</h3>
						<div style={{marginTop: "5px"}}>

							<a href={'https://www.linkedin.com/in/ishan-shetty/'} target={'_blank'}>
								<button className={styles.button}>
									<b>Connect on Linkedin</b>
								</button>
							</a>

							<button className={styles.button} onClick={() => alert('resume moment')}>
								<b>View my Resume</b>
							</button>


							{/*<img width={"40px"} height={"40px"} src={"https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg"}/>*/}
							{/*<img width={"40px"} height={"40px"} src={"https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png"}/>*/}
							{/*<img width={"40px"} height={"40px"} src={"https://pngimage.net/wp-content/uploads/2018/06/logo-youtube-png-blanco-5.png"}/>*/}
						</div>

						<a href={'#about'}>
							<button className={`${styles.downButton} ${styles.button}`}>v</button>
						</a>

					</div>
				</section>
			</>
		);
	}
}

export default Intro;