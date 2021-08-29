import React, { Component } from "react";
import styles from "./animated-background.module.css"
import p5 from "p5";

import { Moon } from "./elements/moon";
import { FireworkSystem } from "./elements/fireworks";
import { Rocket } from "./elements/rocket";

class AnimatedBackground extends Component<{}, { isHover: boolean }> {
  private readonly myRef: React.RefObject<any>;
  private myP5?: p5;

  private rocket?: Rocket;
  private firework?: FireworkSystem;
  private showFireworks = false;

  enterHover = () => { this.setState({ isHover: true }) }
  exitHover = () => { this.setState({ isHover: false }) }

  constructor(props: any) {
    super(props);
    this.myRef = React.createRef();

    this.state = {
      isHover: false
    }
  }

  Sketch = (p: p5) => {

    p.setup = () => {
      p.createCanvas(window.outerWidth, window.innerHeight);
      p.colorMode(p.HSB);
      p.noStroke();

      // this.moon = new Moon(0.5, 100);
      this.firework = new FireworkSystem();
      this.rocket = new Rocket(p);

      p.background('#081b26');

      window.addEventListener('resize',
        () => p.resizeCanvas(window.innerWidth, window.innerHeight))
    }

    p.draw = () => {
      p.background('#081b265F');

      this.firework!.update(p, this.showFireworks);
      this.rocket!.draw(p);
    }
  }

  easterEgg = () => {
    if(!this.showFireworks) {
      this.showFireworks = true;
    }else if(!this.rocket?.active) {
      this.firework!.pause(300);
      this.rocket!.launch();
    }
  }

  componentDidMount(): void {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  render(): JSX.Element {
    return (
      <>
        <span className={styles.moon}
              onMouseEnter={this.enterHover}
              onMouseLeave={this.exitHover}
              onClick={this.easterEgg}>
          {this.state.isHover && <h4 className={styles.hidden}>Click me?</h4>}
        </span>
        <div className={styles.canvasBackground} ref={this.myRef}/>
      </>
    );
  }
}

export default AnimatedBackground;