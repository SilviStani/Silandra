import React from "react";
import styles from "../styles/Footer.module.css";
import Direction from "./Direction";
import Rights from "./Rights";
import Social from "./Social";
import Telephone from "./Telephone";

const Footer = () => {
  return (
    <div className={styles.Container}>
      <Direction/>
      <Telephone/>
      <Social/>
      <Rights/>
    </div>
  );
};

export default Footer;