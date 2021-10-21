import { Component } from "react";
import styles from "./skills-section.module.css";

import java_svg from "../../../assets/images/icons/java.svg";
import python_svg from "../../../assets/images/icons/python.svg";
import csharp_svg from "../../../assets/images/icons/csharp.svg";
import swift_svg from "../../../assets/images/icons/swift.svg";
import android_svg from "../../../assets/images/icons/android.svg";
import angular_svg from "../../../assets/images/icons/angular.svg";
import react_svg from "../../../assets/images/icons/react.svg";
import javascript_svg from "../../../assets/images/icons/javascript.svg";
import html_svg from "../../../assets/images/icons/html.svg";
import css_svg from "../../../assets/images/icons/css.svg";

class SkillsSection extends Component {
  render() {
    return (
      <section>
        <h2>Tools and Technologies</h2>
        <div className={styles.iconHolder}>
          <div className={styles.icon}>
            <img src={java_svg} alt="Java"/>
            <p><b>Java</b></p>
          </div>
          <div className={styles.icon}>
            <img src={python_svg} alt="Python"/>
            <p><b>Python</b></p>
          </div>
          <div className={styles.icon}>
            <img src={csharp_svg} alt="C#"/>
            <p><b>C#</b></p>
          </div>
          <div className={styles.icon}>
            <img src={swift_svg}alt="Swift"/>
            <p><b>Swift</b></p>
          </div>
          <div className={styles.icon}>
            <img src={android_svg} alt="Android"/>
            <p><b>Android</b></p>
          </div>
          <div className={styles.icon}>
            <img src={angular_svg} alt="Angular"/>
            <p><b>Angular</b></p>
          </div>
          <div className={styles.icon}>
            <img src={react_svg} alt="React"/>
            <p><b>React</b></p>
          </div>
          <div className={styles.icon}>
            <img src={javascript_svg} alt="Javascript"/>
            <p><b>JavaScript</b></p>
          </div>
          <div className={styles.icon}>
            <img src={html_svg} alt="HTML"/>
            <p><b>HTML</b></p>
          </div>
          <div className={styles.icon}>
            <img src={css_svg} alt="CSS"/>
            <p><b>CSS</b></p>
          </div>
        </div>
      </section>
    );
  }
}

export default SkillsSection;