import { Component } from "react";
import styles from "./project-card.module.css"

import GITHUB_ICON from '../../assets/images/icons/github.svg'
import WEBSITE_ICON from '../../assets/images/icons/website.svg'

class ProjectCard extends Component<{
  title: string,
  description: string,
  thumbnail: string,
  githubUrl?: string,
  websiteUrl?: string,
}, {}> {
  static defaultProps = {
    githubUrl: undefined,
    websiteUrl: undefined
  }

  render() {
    return (
      <>
        <div className={styles.card}>
          <img src={this.props.thumbnail} className={styles.thumbnail}/>
          <div className={styles.contentArea}>
            <h4 className={styles.title}>{this.props.title}</h4>
            <p className={styles.text}>
              {this.props.description}
            </p>
            <div className={styles.iconContainer}>
              { this.props.githubUrl &&
                <a href={this.props.githubUrl} target={"_blank"}>
                  <img className={styles.icon} src={GITHUB_ICON}/>
                </a>
              }
              { this.props.websiteUrl &&
                <a href={this.props.websiteUrl} target={"_blank"}>
                  <img className={styles.icon} src={WEBSITE_ICON}/>
                </a>
              }
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProjectCard;