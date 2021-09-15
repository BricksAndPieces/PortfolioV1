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
          />
          <ProjectCard
            title={"Example Project"}
            description={"Example description Example description Example description Example description Example description Example description Example description Example description"}
            thumbnail={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fdemo-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-changed-82616276.jpg&f=1&nofb=1"}
            websiteUrl={"https://google.com"}
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