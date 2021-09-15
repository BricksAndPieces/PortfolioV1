import { Component } from "react";
import styles from "./contact-section.module.css";
import ContactForm from "../../contact-form/contact-form";

class ContactSection extends Component {
  render() {
    return (
      <section>
        <h2>Contact Me</h2>
        <div className={styles.contactFormParent}>
          <ContactForm/>
        </div>
      </section>
    );
  }
}

export default ContactSection;