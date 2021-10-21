import {Component} from "react";
import styles from "./home.module.css"
import React from "react";
import Dialog from "../dialog/dialog";
import RESUME_PDF from "../../assets/resume.pdf"

const TAGLINES = [
  "Full-Stack Developer",
  "AI enthusiast",
  "Honors Undergraduate Student"
];

class Home extends Component<{}, {
  taglineIndex: number;
}> {
  private timeout?: NodeJS.Timer;

  constructor(props: any) {
    super(props);
    this.state = {
      taglineIndex: 0
    }
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.taglineIndex
      this.setState({taglineIndex: currentIdx + 1});
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout!);
  }

  render() {
    let tagline = TAGLINES[this.state.taglineIndex % TAGLINES.length];

    return (
      <>
        <section className={styles.section}>
          <div className={styles.contentArea}>
            <h1 className={styles.name}>Ishan Shetty</h1>
            <h3 className={styles.tagline}>{tagline}</h3>
            <div style={{marginTop: "5px"}}>

              <a href={'https://www.linkedin.com/in/ishan-shetty/'} target={'_blank'} rel="noreferrer">
                <button className={styles.button}>
                  <b>Linkedin</b>
                  &nbsp;
                  <i className="fa fa-linkedin-square"/>
                </button>
              </a>

							<a href={'https://github.com/bricksandpieces'} target={'_blank'} rel="noreferrer">
								<button className={styles.button}>
									<b>Github</b>
									&nbsp;
									<i className="fa fa-github-square"/>
								</button>
							</a>

              <a href={RESUME_PDF} target={'_blank'} rel="noreferrer">
                <button className={styles.button}>
                  <b>Resume</b>
                  &nbsp;
                  <i className="fa fa-file-text-o"/>
                </button>
              </a>
            </div>

            <div className={styles.scroll}>
              <a href={"#about"}>
                <div className={styles.mouse}>
                  <div className={styles.mouseWheel}/>
                </div>
              </a>
            </div>

          </div>
        </section>
      </>
    );
  }
}

export default Home;