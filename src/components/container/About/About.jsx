import React from "react";
import "./About.scss";
import Kateryna_Medushyvska_CV from "../../../assets/cv/Kateryna_Medushyvska_CV.pdf";

import { motion } from "framer-motion";
import { bios } from "../../../Data";
import girlImage from "../../../assets/girl-image.jpg";

const About = () => {
  return (
    <div className="container " id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left"
        >
          <motion.img
            src={girlImage}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
          Creative, innovative, and passionate web developer with excellent problem-solving skills, boasting 2 years of experience in a software development agency and 3 years of freelance design and development, where I've completed over 30 projects.
          Been working remotely for 5 years, so know how to organize and streamline processes effectively.
            <br />
            <br />
            Work with JavaScript, React, Node, Vue.js, Next.js, MongoDB, and the MERN Stack in general. Always eager to learn new technologies, and currently excited to gain experience in TypeScript and Flutter.
          </p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="bioKey">
                  {bio.icon}
                  {bio.key}
                </span>
                <span className="bioValue">{bio.value}</span>
              </div>
            );
          })}
          <motion.a
            href={Kateryna_Medushyvska_CV}
            download=""
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
