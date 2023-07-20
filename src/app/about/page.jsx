import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Hassan Sajjad</h1>
          <h2 className={styles.imgDesc}>
            A Full Stack Engineer
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Am I?</h1>
          <p className={styles.desc}>
            My name is Hassan sajjad and i am a full stack engineer with a 1 year of industry experience 
            and currently i am working at CyberSoft Vanatage as a MERN stack developer
            <br />
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What I Do?</h1>
          <p className={styles.desc}>
          I played a key role in developing and launching several successful software products. 
          I collaborated with cross-functional teams to gather requirements, design system architectures, 
          and write clean, efficient code. I am proficient in multiple programming languages such as Java, 
          Python, and JavaScript, and have hands-on experience with modern frameworks and tools like Spring Boot, React, and Docker.
            <br />
            <br /> - Web Devlopment
            <br />
            <br /> - Backend Integrations
            <br />
            <br /> - UI/UX Designer
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
