import { Component } from "react";
import styles from "./header.module.css"

class Header extends Component {
	render() {
		return (
			<ul>
				<li><b><a href={"#resume"}>Resume</a></b></li>
				<li><b><a href={"#projects"}>Projects</a></b></li>
				<li><b><a href={"#skills"}>Skills</a></b></li>
				<li><b><a href={"#about"}>About</a></b></li>
			</ul>
		);
	}
}

export default Header