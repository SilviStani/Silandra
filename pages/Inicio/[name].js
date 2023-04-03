import React from "react";
import styles from "../../styles/Products.module.css";
import { data } from "@/data";
import Navbarr from "@/Components/NavBarr";
import Footer from "@/Components/Footer";

const Product = ({ product }) => {
  return (
    <>
      <div className={styles.Container}>
        <Navbarr />
        <div className={styles.rightCard}>
          {product.images.map((img) => (
            <div key={img.id} className={styles.ImagesDiv}>
              <img className={styles.img} src={img.img} alt={img.desc} />
              <p style={{color: "gray"}}>{img.desc}</p>
              <p style={{color: "gray"}}>{img.price}</p>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      params: { name: item.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const name = ctx.params.name;
  const product = data.filter((item) => item.name === name)[0];
  return {
    props: { product },
  };
};

export default Product;
