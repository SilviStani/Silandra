import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
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
            alt="Novias"
            className={styles.icon}
          />
          Intro
        </div>
      </Link>
      <Link href="/novias" passHref>
        <div className={styles.iconos}><img 
        src="/imagenes/corazones.png"
        alt="Novias"
        className={styles.icon} />
        Novias
        </div>
      </Link>
      <Link href="/quince" passHref>
        <div className={styles.iconos}><img 
        src="/imagenes/corazones.png"
        alt="Quince Años link"
        className={styles.icon}/>
        Quince Años
        </div>
      </Link>
      <Link href="/sociales" passHref>
        <div className={styles.iconos}><img 
        src="/imagenes/corazones.png"
        alt="Eventos Sociales link"
        className={styles.icon} />
        Sociales
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
