import React from "react";
import styles from "../styles/Footer.module.css";

const Telephone = () => {
  return (
    <div className={styles.telephone}>
      <a href="tel:+5491141593921" className={styles.phoneContainer}><img src="/imagenes/ring-phone.png" alt="Telefono Escobar" height={"25px"} />011-15-41593921</a>
      <a href="tel:+5491151103825" className={styles.phoneContainer}><img src="/imagenes/ring-phone.png" alt="Telefono Savio" height={"25px"} />011-15-51103825</a>
    </div>
  );
};

export default Telephone;
