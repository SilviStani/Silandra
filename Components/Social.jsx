import React from 'react';
import styles from "../styles/Footer.module.css";


const Social = () => {
  return (
    <div className={styles.social}>
    <a
      href="https://www.instagram.com/silandra.altacostura/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.SocialColumn}>
        <p className={styles.socialLocalidad}>Síguenos</p>
        <img
          src="/imagenes/instagram.png"
          alt="Acceso Instagram"
          className={styles.redSocial}
        />
      </div>
    </a>
    <a
      href="https://wa.me/+5491141593921/?text=Hola!%20Me%20gustaría%20consultar%20por%20su%20servicio."
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.SocialColumn}>
        <p className={styles.socialLocalidad}>Escobar</p>
        <img
          src="/imagenes/whatsapp.png"
          alt="Acceso Whatsapp"
          className={styles.redSocial}
        />
      </div>
    </a>
    <a
      href="https://wa.me/+5491151103825/?text=Hola!%20Me%20gustaría%20consultar%20por%20su%20servicio."
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.SocialColumn}>
        <p className={styles.socialLocalidad}>Maq. Savio</p>
        <img
          src="/imagenes/whatsapp.png"
          alt="Acceso Whatsapp"
          className={styles.redSocial}
        />
      </div>
    </a>
  </div>
  )
}

export default Social