import { Component } from "react";
import styles from "./page-content.module.css"

// https://devicon.dev/
import java_svg from "../../assets/images/icons/java.svg"
import python_svg from "../../assets/images/icons/python.svg"
import csharp_svg from "../../assets/images/icons/csharp.svg"
import swift_svg from "../../assets/images/icons/swift.svg"
import android_svg from "../../assets/images/icons/android.svg"
import angular_svg from "../../assets/images/icons/angular.svg"
import react_svg from "../../assets/images/icons/react.svg"
import javascript_svg from "../../assets/images/icons/javascript.svg"
import html_svg from "../../assets/images/icons/html.svg"
import css_svg from "../../assets/images/icons/css.svg"
import Timeline from "../timeline/timeline";
import ContactForm from "../contact-form/contact-form";
import ProjectCard from "../project-card/project-card";
import AboutSection from "../sections/about-section/about-section";
import SkillsSection from "../sections/skills-section/skills-section";
import ExperienceSection from "../sections/experience-section/experience-section";
import ProjectSection from "../sections/project-section/project-section";
import ContactSection from "../sections/contact-section/contact-section";

class PageContent extends Component<{id: string}, {}> {
	render() {
		return (
			<section id={this.props.id} className={styles.section}>
				<div className={styles.contentArea}>
					<AboutSection/>
					<SkillsSection/>
					<ExperienceSection/>
					<ProjectSection/>
					<ContactSection/>
				</div>
			</section>
		);
	}
}

export default PageContent;
