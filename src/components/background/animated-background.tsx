import React, { Component } from "react";
import styles from "./animated-background.module.css"
import p5 from "p5";

import { FireworkSystem } from "./elements/fireworks";
import { Rocket } from "./elements/rocket";

class AnimatedBackground extends Component<{}, { isMoonHover: boolean, moonText: string }> {
  private readonly myRef: React.RefObject<any>;
  private myP5?: p5;

  private rocket?: Rocket;
  private firework?: FireworkSystem;
  private showFireworks = false;
  private allowRocket = false;

  enterHover = () => { this.setState({ isMoonHover: true }) }
  exitHover = () => { this.setState({ isMoonHover: false }) }

  constructor(props: any) {
    super(props);
    this.myRef = React.createRef();

    this.state = {
      isMoonHover: false,
      moonText: 'Click me?'
    }
  }

  Sketch = (p: p5) => {

    p.setup = () => {
      p.createCanvas(window.outerWidth, window.innerHeight);
      p.colorMode(p.HSB);
      p.noStroke();

      this.firework = new FireworkSystem();
      this.rocket = new Rocket(p);

      p.background('#081b26');

      window.addEventListener('resize',
        () => p.resizeCanvas(window.innerWidth, window.innerHeight))
    }

    p.draw = () => {
      p.background('#081b265F');

      this.firework?.update(p, this.showFireworks);
      this.rocket?.draw(p);
    }
  }

  componentDidMount(): void {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  easterEgg = () => {
    if(!this.showFireworks) {
      this.showFireworks = true;
      setTimeout(() => {
        this.setState({moonText: 'Again?'})
        this.allowRocket = true;
      }, 5000);
    }else if(this.allowRocket && !this.rocket?.active) {
      this.firework?.pause(300);
      this.rocket?.launch();
    }
  }

  render(): JSX.Element {
    return (
      <>
        <span className={styles.moon}
              onMouseEnter={this.enterHover}
              onMouseLeave={this.exitHover}
              onClick={this.easterEgg}
              id={"moon"}>
          {
            this.state.isMoonHover && <h4 className={styles.hidden}>
              {this.state.moonText}
            </h4>
          }
        </span>
        <div className={styles.canvasBackground} ref={this.myRef}/>
      </>
    );
  }
}

export default AnimatedBackground;