import { Component } from "react";
import styles from './skills.module.css'

class Skills extends Component {
	render() {
		return (
			<section id={this.props.id} className={styles.section}>
				<div className={styles.contentArea}>
					<h2>Tools and Technologies</h2>
					<div className={styles.iconHolder}>

					</div>
				</div>
			</section>
		);
	}
}

export default Skills