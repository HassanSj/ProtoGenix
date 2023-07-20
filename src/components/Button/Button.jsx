import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ text, url , type}) => {
  return (
    <Link href={url}>
      <button type={ `${type}`} className={styles.container}>{text}</button>
    </Link>
  );
};

export default Button;
