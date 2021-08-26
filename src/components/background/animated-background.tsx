import React, { Component } from "react";
import styles from "./animated-background.module.css"
import p5 from "p5";

import { Moon } from "./elements/moon";
import {FireworkSystem} from "./elements/fireworks";

class AnimatedBackground extends Component {
  private readonly myRef: React.RefObject<any>;
  private myP5?: p5;

  private moon?: Moon;
  private firework?: FireworkSystem

  constructor(props: any) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5) => {

    p.setup = () => {
      p.createCanvas(window.outerWidth, window.innerHeight);
      p.colorMode(p.HSB);
      p.noStroke();

      this.moon = new Moon(0.5, 100);
      this.firework = new FireworkSystem();
    }

    p.draw = () => {
      p.background('#081b26');

      this.moon!.update();
      this.moon!.draw(p);

      this.firework!.update(p);
      this.firework!.draw(p);
    }
  }

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  render() {
    return <div className={styles.canvasBackground} ref={this.myRef}/>
  }
}

export default AnimatedBackground;