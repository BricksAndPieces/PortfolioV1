import { Component } from "react";
import styles from "./project-section.module.css";
import ProjectCard from "../../project-card/project-card";

class ProjectSection extends Component {
  render() {
    return (
      <section>
        <h2>Projects</h2>
        <div className={styles.projectContainer}>
          <ProjectCard
            title={"Snake AI"}
            description={"A Neural Network made from scratch in java that can beat the game of Snake. Includes implementations of both a genetic algorithm and traditional training algorithms"}
            thumbnail={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fdemo-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-changed-82616276.jpg&f=1&nofb=1"}
            githubUrl={"https://github.com/BricksAndPieces/Neural-Network-Framework"}
          />
          <ProjectCard
            title={"Boids Flocking Ecosystem"}
            description={"Implementation of the Boids flocking algorithm. Includes optimizations such as QuadTree and a ecosystem simulation to mimic properties found in nature"}
            thumbnail={"https://raw.githubusercontent.com/BricksAndPieces/Boids-Ecosystem/master/images/Demo.gif"}
            githubUrl={"https://github.com/BricksAndPieces/Boids-Ecosystem/"}
          />
          <ProjectCard
            title={"Personal Portfolio"}
            description={"A personal website that acts as a portfolio while also showing off my skills in action. Written in typescript using react."}
            thumbnail={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fdemo-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-changed-82616276.jpg&f=1&nofb=1"}
            githubUrl={"https://github.com/BricksAndPieces/bricksandpieces.github.io"}
            websiteUrl={"https://bricksandpieces.github.io"}
          />
          <ProjectCard
            title={"Example Project"}
            description={"Example description Example description Example description Example description Example description Example description Example description Example description"}
            thumbnail={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fdemo-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-changed-82616276.jpg&f=1&nofb=1"}
          />
          <ProjectCard
            title={"Example Project"}
            description={"Example description Example description Example description Example description Example description Example description Example description Example description"}
            thumbnail={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fdemo-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-changed-82616276.jpg&f=1&nofb=1"}
            githubUrl={"https://github.com"}
            websiteUrl={"https://google.com"}
          />
          <ProjectCard
            title={"Example Project"}
            description={"Example description Example description Example description Example description Example description Example description Example description Example description"}
            thumbnail={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fdemo-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-changed-82616276.jpg&f=1&nofb=1"}
            githubUrl={"https://github.com"}
            websiteUrl={"https://google.com"}
          />
          <ProjectCard
            title={"Example Project"}
            description={"Example description Example description Example description Example description Example description Example description Example description Example description"}
            thumbnail={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fdemo-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-changed-82616276.jpg&f=1&nofb=1"}
            githubUrl={"https://github.com"}
            websiteUrl={"https://google.com"}
          />
          <ProjectCard
            title={"Example Project"}
            description={"Example description Example description Example description Example description Example description Example description Example description Example description"}
            thumbnail={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fdemo-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-changed-82616276.jpg&f=1&nofb=1"}
            githubUrl={"https://github.com"}
            websiteUrl={"https://google.com"}
          />
          <ProjectCard
            title={"Example Project"}
            description={"Example description Example description Example description Example description Example description Example description Example description Example description"}
            thumbnail={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fdemo-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-changed-82616276.jpg&f=1&nofb=1"}
            githubUrl={"https://github.com"}
            websiteUrl={"https://google.com"}
          />
        </div>
      </section>
    )
  }
}

export default ProjectSection;