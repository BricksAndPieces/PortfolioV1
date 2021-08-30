import { Component } from "react";
import styles from './footer.module.css'

class Footer extends Component {
	render() {
		return (
			<>
				{/*<p className={styles.footer}>*/}
				{/*	Have you tried clicking on the <a className={styles.footerLink} href={"#moon"}><b>Moon</b></a>?*/}
				{/*</p>*/}

				{/* Look into displaying this after the moon has been clicked*/}
				<p className={styles.footer}>Made with ❤️ by Ishan Shetty</p>
			</>
		);
	}
}

export default Footer