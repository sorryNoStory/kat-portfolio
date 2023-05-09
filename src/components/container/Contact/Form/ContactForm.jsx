import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

function ContactForm() {
  const [state, handleSubmit] = useForm("xjvdlepn");
  if (state.succeeded) {
    return <p>Thanks for contacting me! I'll get back to you asap</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [150, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="contact_right"
      >
        <h3>Get In Touch</h3>
        <div className="row">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last name" />
        </div>

        <div className="row">
          <input id="phone" type="phone" name="phone" placeholder="Phone" />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="row">
          <textarea
            id="message"
            name="message"
            placeholder="message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="btn"
        >
          <button type="submit" disabled={state.submitting}>
            SEND
          </button>
        </motion.div>
      </motion.div>
    </form>
  );
}

export default ContactForm;
