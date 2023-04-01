import Link from "next/link";
import React from "react";
import styled from "../styles/Home.module.css";

const LandingPage = () => {
  return (
    <div className={styled.MainContainer}>
      <div className={styled.Container}>
        <div className={styled.Logo}>
          <Link href="/Inicio">
            <img className={styled.img} src="/imagenes/Silandra.png" alt="" />
          </Link>
        </div>
        <div className={styled.logoContainer}>
          <div className={styled.layout} />
          <h1 className={styled.LandingPage}>Silandra Alta Costura</h1>
          <div className={styled.layout} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
