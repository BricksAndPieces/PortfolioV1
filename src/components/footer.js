import { Component } from "react";
import styles from './footer.module.css'

class Footer extends Component {
	render() {
		return (
			<>
				<p>
					Have you tried clicking on the <a href={"#moon"}><b>Moon</b></a>?
				</p>
				<p>Made with ❤️ by Ishan Shetty</p>
			</>
		);
	}
}

export default Footer