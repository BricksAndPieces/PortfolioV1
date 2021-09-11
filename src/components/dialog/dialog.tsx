import { Component } from "react";
import styles from "./dialog.module.css";

class Dialog extends Component<{
  title: string
  description: string
}, {
  display: boolean
  showing: boolean
  scroll: number
}> {
  constructor(props: any) {
    super(props);

    this.state = {
      display: false,
      showing: false,
      scroll: 0
    }
  }

  componentDidUpdate() {
    if(this.state.display && document.body && !this.state.showing) {
      let scrollY = window.scrollY;
      document.body.style.top = `-${scrollY}px`;
      document.body.style.position = "fixed";
      this.setState({
        showing: true,
        scroll: scrollY
      })
    }
  }

  render() {
    let htmlTag = document.querySelector("html");
    return (
      <>
        {this.state.display &&
				<div className={styles.modal}>
					<div className={styles.dialog}>
						<h4>{this.props.title}</h4>
						<p>{this.props.description}</p>

						<a href={"https://www.linkedin.com/in/ishan-shetty/"}>
							<button>
								LinkedIn
							</button>
						</a>
						<button onClick={() => {
              document.body.style.position = ""
              document.body.style.top = ""

              if(htmlTag) {
                htmlTag.style.scrollBehavior = "auto"
                window.scrollTo(0, this.state.scroll);
                htmlTag.style.scrollBehavior = "smooth"
              }

              this.setState({
                display: false,
                showing: false
              });
            }}>
							Close
						</button>
					</div>
				</div>
        }
      </>
    );
  }
}

export default Dialog;