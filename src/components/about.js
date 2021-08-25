import { Component } from "react";
import styles from "./about.module.css"

class About extends Component {
	render() {
		return (
			<section id={this.props.id} className={styles.section}>
				<div className={styles.contentArea}>
					<div className={styles.textArea}>
						<h2>About Me</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
					<div className={styles.iconHolder}>
						<div className={styles.grid}>
							<div className={styles.icon}><img src="https://image.flaticon.com/icons/png/512/226/226777.png" alt="Java"/></div>
							<div className={styles.icon}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png" alt="Python"/></div>
							<div className={styles.icon}><img src="https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png" alt="C#"/></div>
							<div className={styles.icon}><img src="https://assets.stickpng.com/images/58482ce4cef1014c0b5e4a4c.png" alt="Swift"/></div>
							<div className={styles.icon}><img src="https://freeiconshop.com/wp-content/uploads/edd/android-flat.png" alt="Android"/></div>
							<div className={styles.icon}><img src="https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" alt="Angular"/></div>
							<div className={styles.icon}><img src="https://diatics.com/static/media/reacticon.bae9ca55.png" alt="React"/></div>
							<div className={styles.icon}><img src="https://cdn0.iconfinder.com/data/icons/web-social-and-folder-icons/512/Unity_3D.png" alt="Unity"/></div>
							<div className={styles.icon}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Godot_icon.svg/2048px-Godot_icon.svg.png" alt="Godot"/></div>
							<div className={styles.icon}><img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-shield-logo-icon-2.png" alt="Javascript"/></div>
							<div className={styles.icon}><img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-image-logo-html-7.png" alt="HTML"/></div>
							<div className={styles.icon}><img src="https://www.dotmh.io/images/about/skills/frontend/css.png" alt="CSS"/></div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;