import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import PageContent from "./components/page-content/page-content";

import { Component } from "react";
import styles from './App.module.css';
import React from "react";
import AnimatedBackground from "./components/animated-background/animated-background";
import TopButton from "./components/top-button/top-button";

class App extends Component {
  private readonly footerRef: React.RefObject<any>;

  constructor(props: any) {
    super(props);
    this.footerRef = React.createRef();
  }

  render() {
    return (
      <>
        {/*<Header/>*/}
        <AnimatedBackground moonClicked={ () => this.footerRef.current.setState({moonClicked: true}) }/>
        <Home/>

        {/*<div className={`${styles.spacer} ${styles.divider1}`} />*/}
        <div className={`${styles.spacer} ${styles.city}`} />
        <div className={`${styles.spacer} ${styles.divider2}`} />

        <PageContent id={"about"}/>

        {/*<div className={`${styles.spacer} ${styles.divider1} ${styles.flip}`} />*/}

        {/*<Skills id={"skills"}/>*/}

        {/*<section id={"projects"}>*/}
        {/*  Projects*/}
        {/*</section>*/}
        {/*<section id={"resume"}>*/}
        {/*  Resume*/}
        {/*</section>*/}
        <Footer ref={this.footerRef}/>
        <TopButton/>
      </>
    );
  }
}

export default App;
