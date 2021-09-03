import { Component } from "react";
import styles from './footer.module.css'

class Footer extends Component<{}, {moonClicked: boolean}> {

	constructor(props: any) {
		super(props);

		this.state = {
			moonClicked: false
		}
	}

	render() {
		return (
			<>
				{
					this.state.moonClicked
						? <p className={styles.footer}>Made with ❤️ by Ishan Shetty</p>
						: <p className={styles.footer}>
								Have you tried clicking on the <a className={styles.footerLink} href={"#moon"}><b>Moon</b></a>?
							</p>
				}
			</>
		);
	}
}

export default Footer