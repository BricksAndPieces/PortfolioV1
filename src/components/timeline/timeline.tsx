import { Component } from "react";
import styles from "./timeline.module.css"

class Timeline extends Component<{
  year: string
  title: string
  subTitle: string
  description: string
  isLast: boolean
}, {}> {
  static defaultProps = {
    isLast: false,
  }

  render() {
    return (
      <>
        <div className={`${styles.timeline} ${!this.props.isLast && styles.line}`}>
          <div className={styles.circle}>
            <h4 className={styles.circleText}>{this.props.year}</h4>
          </div>
          <div className={`${styles.contentArea} ${!this.props.isLast && styles.bottomMargin}`}>
            <h3 className={styles.mainHeading}>{this.props.title}</h3>
            <h4 className={styles.subHeading}>{this.props.subTitle}</h4>
            <p className={styles.contentDescription}>
              {
                this.props.description.split("\n").map((value, index) => {
                  return (
                    <span key={index}>
                      {value}
                      <br/>
                    </span>
                  )
                })
              }
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Timeline;