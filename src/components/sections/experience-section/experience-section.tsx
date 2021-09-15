import { Component } from "react";
import styles from "./experience-section.module.css";
import Timeline from "../../timeline/timeline";

class ExperienceSection extends Component {
  render() {
    return (
      <section>
        <h2>Experience</h2>
        <Timeline
          year={"2021"}
          title={"Example Title"}
          subTitle={"Jun 2020 - Jul 2021 | Example position"}
          description={
            "Example text example text example text example text example text example text example text " +
            "Example text example text example text example text example text example text example text " +
            "Example text example text example text example text example text example text example text " +
            "Example text example text example text example text example text example text example text " +
            "Example text example text example text example text example text example text example text "
          }
        />
        <Timeline
          year={"2020"}
          title={"Example Title"}
          subTitle={"Jun 2020 - Jul 2021 | Example position"}
          description={
            "Example text example text example text example text example text example text example text " +
            "Example text example text example text example text example text example text example text "
          }
        />
        <Timeline
          year={"2019"}
          title={"Example Title"}
          subTitle={"Jun 2020 - Jul 2021 | Example position"}
          description={
            "Example text example text example text example text example text example text example text " +
            "Example text example text example text example text example text example text example text " +
            "Example text example text example text example text example text example text example text " +
            "Example text example text example text example text example text example text example text " +
            "Example text example text example text example text example text example text example text "
          }
          isLast={true}
        />
      </section>
    );
  }
}

export default ExperienceSection;