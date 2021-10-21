import { Component } from "react";
import styles from "./experience-section.module.css";
import Timeline from "../../timeline/timeline";

class ExperienceSection extends Component {
  render() {
    return (
      <section>
        <h2>Experience</h2>
        <div className={styles.timelineContainer}>
          <div className={styles.timelineParent}>
            <Timeline
              year={"2021"}
              title={"Associate Software Engineer"}
              subTitle={"ExperienceIT"}
              description={
                "• Worked with small companies and Fortune 500 companies\n" +
                "• Worked with the following technologies: AngularJS, TypeScript, Micronaut, Ruby-on-Rails\n" +
                "• Worked with frontend and backend technologies to implement services\n" +
                "• Operated within a fully-remote, agile team"
              }
            />
            <Timeline
              year={"2020"}
              title={"Captain"}
              subTitle={"Talon Robotics FRC 2502"}
              description={
                "• Elected by the team via an application\n" +
                "• One of four team captains in charge of a 40+ member team\n" +
                "• Supervise 5 business leads and subteams\n" +
                "• Conduct weekly team meetings, captain meetings, and monthly team leadership meetings\n" +
                "• Communicate effectively with the team through weekly emails and over Slack\n" +
                "• Foster relationships by engaging with sponsors and community\n" +
                "• Promote team brand"
              }
            />
            <Timeline
              year={"2019"}
              title={"Media Lead"}
              subTitle={"Talon Robotics FRC 2502"}
              description={
                "• Selected by team captains via an application.\n" +
                "• Media subteam was founded after I noticed a significant lack in management of our website.\n" +
                "• In charge of maintaining team website, social media, and photography equipment.\n" +
                "• Revamped the team website over the course of a year."
              }
              isLast={true}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default ExperienceSection;