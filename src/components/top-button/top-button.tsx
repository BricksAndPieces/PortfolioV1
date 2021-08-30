import { Component } from "react";
import styles from "./top-button.module.css"

class TopButton extends Component<{}, {
  showButton: boolean
}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showButton: window.scrollY > 200
    }

    // Stop initial animation from showing
    setTimeout(() => {
      document.getElementById("top-button")
        ?.style.setProperty("animation-duration", "0.25s")
    }, 250)
  }

  componentDidMount(): void {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let value = window.scrollY < 200;
    if(value === this.state.showButton) {
      this.setState({showButton: !value})
    }
  }

  render() {
    return (
      <button
        id={"top-button"}
        style={{animationDuration: "0s"}}
        className={`${styles.button} ${this.state.showButton ? styles.show : styles.hide}`}
        onClick={() => this.state.showButton && window.scrollTo(0, 0)}>
        <p className={styles.text}>↑</p>
      </button>
    );
  }
}

export default TopButton;