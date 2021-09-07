import { Component } from "react";
import styles from "./about.module.css"

// https://devicon.dev/
import java_svg from "../assets/images/skills/java.svg"
import python_svg from "../assets/images/skills/python.svg"
import csharp_svg from "../assets/images/skills/csharp.svg"
import swift_svg from "../assets/images/skills/swift.svg"
import android_svg from "../assets/images/skills/android.svg"
import angular_svg from "../assets/images/skills/angular.svg"
import react_svg from "../assets/images/skills/react.svg"
import javascript_svg from "../assets/images/skills/javascript.svg"
import html_svg from "../assets/images/skills/html.svg"
import css_svg from "../assets/images/skills/css.svg"
import Timeline from "./timeline/timeline";
import ContactForm from "./contact-form/contact-form";

class About extends Component<{id: string}, {}> {
	render() {
		return (
			<section id={this.props.id} className={styles.section}>
				<div className={styles.contentArea}>
					<h2 className={styles.heading}>About Me</h2>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
						esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
						qui officia deserunt mollit anim id est laborum.
					</p>

					<h2 className={styles.heading}>Tools and Technologies</h2>
					<div className={styles.iconHolder}>
						<div className={styles.icon}>
							<img src={java_svg} alt="Java"/>
							<p className={styles.iconName}><b>Java</b></p>
						</div>
						<div className={styles.icon}>
							<img src={python_svg} alt="Python"/>
							<p className={styles.iconName}><b>Python</b></p>
						</div>
						<div className={styles.icon}>
							<img src={csharp_svg} alt="C#"/>
							<p className={styles.iconName}><b>C#</b></p>
						</div>
						<div className={styles.icon}>
							<img src={swift_svg}alt="Swift"/>
							<p className={styles.iconName}><b>Swift</b></p>
						</div>
						<div className={styles.icon}>
							<img src={android_svg} alt="Android"/>
							<p className={styles.iconName}><b>Android</b></p>
						</div>
						<div className={styles.icon}>
							<img src={angular_svg} alt="Angular"/>
							<p className={styles.iconName}><b>Angular</b></p>
						</div>
						<div className={styles.icon}>
							<img src={react_svg} alt="React"/>
							<p className={styles.iconName}><b>React</b></p>
						</div>
						<div className={styles.icon}>
							<img src={javascript_svg} alt="Javascript"/>
							<p className={styles.iconName}><b>JavaScript</b></p>
						</div>
						<div className={styles.icon}>
							<img src={html_svg} alt="HTML"/>
							<p className={styles.iconName}><b>HTML</b></p>
						</div>
						<div className={styles.icon}>
							<img src={css_svg} alt="CSS"/>
							<p className={styles.iconName}><b>CSS</b></p>
						</div>
					</div>

					<h2 className={styles.heading}>Experience</h2>
					<Timeline
						year={"2021"}
						title={"Example Title"}
						subTitle={"Jun 2020 - Jul 2021 | Example position"}
						description={
							"Example text example text example text example text example text example text example text " +
							"Example text example text example text example text example text example text example text " +
							"Example text example text example text example text example text example text example text " +
							"Example text example text example text example text example text example text example text " +
							"Example text example text example text example text example text example text example text "
						}
					/>
					<Timeline
						year={"2020"}
						title={"Example Title"}
						subTitle={"Jun 2020 - Jul 2021 | Example position"}
						description={
							"Example text example text example text example text example text example text example text " +
							"Example text example text example text example text example text example text example text "
						}
					/>
					<Timeline
						year={"2019"}
						title={"Example Title"}
						subTitle={"Jun 2020 - Jul 2021 | Example position"}
						description={
							"Example text example text example text example text example text example text example text " +
							"Example text example text example text example text example text example text example text " +
							"Example text example text example text example text example text example text example text " +
							"Example text example text example text example text example text example text example text " +
							"Example text example text example text example text example text example text example text "
						}
						isLast={true}
					/>

					<h2 className={styles.heading}>Projects</h2>
					<p className={styles.text}>TODO</p>

					<h2 className={styles.heading}>Contact Me</h2>
					<div className={styles.contactFormParent}>
						<ContactForm/>
					</div>
				</div>
			</section>
		);
	}
}

export default About;