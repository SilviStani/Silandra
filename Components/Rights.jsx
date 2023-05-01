import React from "react";
import styles from "../styles/Footer.module.css";

const Rights = () => {
  const ano = new Date();
  let fecha = ano.getFullYear();
  return (
    <div className={styles.Rights}>
      <div>
        <p className={styles.pRights}>
          © {fecha} - Silandra Alta Costura
          <br />
          Todos los Derechos Reservados
        </p>
      </div>
      <div className={styles.desarrollo}>
        <img
          src="/imagenes/programacion-web.png"
          alt="Link directo al programador"
          height={"30px"}
        />
        <a href="https://react-portfolio-silvistani.vercel.app/" target="blank">
          <p className={styles.pdev}>
            Web desarrollada por: <br />
            SilviDev
          </p>
        </a>
      </div>
    </div>
  );
};

export default Rights;
