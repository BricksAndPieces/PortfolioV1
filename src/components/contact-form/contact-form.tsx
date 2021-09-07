import { Component } from "react";
import styles from './contact-form.module.css'

class ContactForm extends Component {
  render() {
    return (
      <>
        <div className={styles.parentContainer}>
          {/*<div className={styles.formContainer}>*/}
            <form className={styles.formContainer}>
              <label className={styles.label}>Email</label>
              <input className={styles.emailInput}/>
              <div className={styles.spacer}/>
              <label className={`${styles.label} ${styles.paddingTop}`}>Message</label>
              <textarea className={styles.messageInput}/>
              <button className={styles.submitButton}><b>Submit</b></button>
            </form>
          {/*</div>*/}
        </div>
      </>
    );
  }
}

export default ContactForm;