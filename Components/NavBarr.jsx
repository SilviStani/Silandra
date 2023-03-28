import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbarr = () => {
  return (
    <div className={styles.Container}>
      <Link href="/incio" passHref>
        <img
          src="/imagenes/Silandra.png"
          alt="Silandra Logo. link al inicio de la pagina"
          className={styles.img}
        />
      </Link>
      <Link href="/" passHref>
        <div className={styles.iconos}>
          <img
            src="/imagenes/corazones.png"
            alt="Video Intro"
            className={styles.icon}
          />
          Intro
        </div>
      </Link>
      <Link href="/Inicio/novias" passHref>
        <div className={styles.iconos}>
          <img
            src="/imagenes/corazones.png"
            alt="Novias"
            className={styles.icon}
          />
          Novias
        </div>
      </Link>
      <Link href="/Inicio/quince" passHref>
        <div className={styles.iconos}>
          <img
            src="/imagenes/corazones.png"
            alt="Quince Años link"
            className={styles.icon}
          />
          Quince Años
        </div>
      </Link>
      <Link href="/Inicio/sociales" passHref>
        <div className={styles.iconos}>
          <img
            src="/imagenes/corazones.png"
            alt="Eventos Sociales link"
            className={styles.icon}
          />
          Sociales
        </div>
      </Link>
    </div>
  );
};

export default Navbarr;
