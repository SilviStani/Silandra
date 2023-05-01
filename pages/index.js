import Head from "next/head";
import LandingPage from "./LandingPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Silandra Alta Costura</title>
        <meta name="description" content="Vestidos Alta Costura" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/imagenes/Silandra.png" />
      </Head>
      <div>
        <LandingPage/>
      </div>
    </>
  );
}
