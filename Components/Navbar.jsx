import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = ({ services }) => {
  return (
    <div className={styles.Container}>
      <Link href="/Inicio" passHref>
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
            alt="Intro"
            className={styles.icon}
          />
          Intro
        </div>
      </Link>
      {services.map((service) => (
        <Link href={`/Inicio/${service.name}`} passHref key={service.id}>
          <div className={styles.iconos}>
            <img
              src="/imagenes/corazones.png"
              alt={service.title}
              className={styles.icon}
            />
            {service.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
