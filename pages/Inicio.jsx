import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";
import styles from "../styles/Inicio.module.css";
import { data } from "@/data";

const Inicio = ({services}) => {
  return (
    <div className={styles.Container}>
      <Navbar services={services}></Navbar>
      <div className={styles.ContainerIntro}>
        <div className={styles.Left}>
          <div className={styles.containerP}>
            <p className={styles.p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className={styles.Right}>
          <img
            className={styles.img1}
            src="https://images.pexels.com/photos/1721944/pexels-photo-1721944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Novia con su hermoso ramo"
          />
          <img
            className={styles.img2}
            src="https://images.pexels.com/photos/4937768/pexels-photo-4937768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Novia con su hermoso ramo"
          />
          <img
            className={styles.img3}
            src="https://images.pexels.com/photos/15568924/pexels-photo-15568924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Novia con su hermoso ramo"
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export const getStaticProps = async ()=> {
  const services = data;
  return {
    props: {services}
  }
  }

export default Inicio;
