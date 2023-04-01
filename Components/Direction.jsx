import React from "react";
import styles from "../styles/Footer.module.css";

const Direction = () => {
  return (
    <div className={styles.direction}>
      <a
        className={styles.a}
        href="https://goo.gl/maps/gagVMKDNddp37E8S9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className={styles.Localidad}>Escobar</p>
        <p className={styles.p}>Mitre 694</p>
      </a>
      <a
        className={styles.a}
        href="https://goo.gl/maps/mGdFukmv3fXkcceJ7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className={styles.Localidad}>Savio</p>
        <p className={styles.p}>Boulevard 5 de Junio 928. Galería Local 2</p>
      </a>
    </div>
  );
};

export default Direction;
