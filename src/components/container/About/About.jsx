import React from "react";
import "./About.scss";
import Kateryna_Medushyvska_CV from "../../../assets/cv/Kateryna_Medushyvska_CV.pdf";

import { motion } from "framer-motion";
import { bios } from "../../../Data";
import portfolio from "../../../assets/portfolio.jpg";

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
            src={portfolio}
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
            With 7 years in product and 2 in development, I bring a unique
            perspective and deep knowledge of creating successful products. My
            mix of soft and hard skills allows me to collaborate with all teams
            and deliver exceptional outcomes.
            <br />
            <br />
            My skill set is focused on Frontend Javascript development with
            expertise in React, Redux, Next 13, Tailwind, CSS, and SCSS.
            However, I'm also expanding my knowledge and skills in backend
            technologies such as Node.js, Express, Strapi, and MongoDB to create
            robust web applications.
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
