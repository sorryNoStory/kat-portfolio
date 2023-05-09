import React from "react";
import "./Contact.scss";
import { contacts } from "../../../Data";
import { socialIcons } from "../../../Data";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import ContactForm from "./Form/ContactForm";

const Contact = () => {
  const [state, handleSubmit] = useForm("xjvdlepn");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_left_container"
        >
          <h3>Let's talk</h3>
          <p className="contact_text">
            I'm looking for a remote job or ready to relocate to work in an
            office. I can work as an independent contractor or be hired by a
            company. In most cases, I don't require visa sponsorship. Please
            contact me, and we can discuss all the details. Thanks :)
          </p>
          {contacts.map((contact) => {
            return (
              <div className="contact_left" key={contact.id}>
                <div className="icon">{contact.icon}</div>
                <p>{contact.infoText}</p>
              </div>
            );
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
              return (
                <div key={index}>
                  <a href={socialIcon.link} target="_blank">
                    {socialIcon.icon}
                  </a>
                </div>
              );
            })}
          </div>
        </motion.div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
