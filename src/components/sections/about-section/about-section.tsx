import { Component } from "react";
import styles from "./about-section.module.css";

class AboutSection extends Component {
  render() {
    return (
      <section>
        <h2>About Me</h2>
        <div className={styles.container}>
          <p className={styles.text}>
            My name is Ishan Shetty and I love creating efficient programs.
            I am a full-stack developer and an honors student at the University of Minnesota.
            I am experienced at working in-person, hybrid, and fully remote in an agile development environment.
            I enjoy working on challenging projects and interacting with likeminded individuals.
            I am particularly interested in artificial intelligence and computer simulations, and the problems
            that can be solved using these technologies.
          </p>
        </div>
      </section>
    );
  }
}

export default AboutSection;