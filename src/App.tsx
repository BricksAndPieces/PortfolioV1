import Intro from "./components/intro";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";

import { Component } from "react";
import styles from './App.module.css';
import Skills from "./components/skills";
import React from "react";
import AnimatedBackground from "./components/background/animated-background";

class App extends Component {
  render() {
    return (
      <>
        {/*<Header/>*/}
        <AnimatedBackground/>
        <Intro/>

        {/*<div className={`${styles.spacer} ${styles.divider1}`} />*/}
        <div className={`${styles.spacer} ${styles.city}`} />
        <div className={`${styles.spacer} ${styles.divider2}`} />

        <About id={"about"}/>

        <div className={`${styles.spacer} ${styles.divider1} ${styles.flip}`} />

        <Skills id={"skills"}/>

        <section id={"projects"}>
          Projects
        </section>
        <section id={"resume"}>
          Resume
        </section>
        <Footer/>
      </>
    );
  }
}

export default App;
