import Intro from "./components/intro";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";

import { Component } from "react";
import styles from './App.module.css';
import Skills from "./components/skills";
import React from "react";

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <Intro/>

        <div className={`${styles.spacer} ${styles.divider1}`} />

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
