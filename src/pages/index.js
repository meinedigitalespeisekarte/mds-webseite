import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Navigation/Nav";
import Pricing from "@/components/Pricing/Pricing";
import Footer from "@/components/Footer/Footer";
import NumberDisplay from "@/components/NumberDisplay/NumberDisplay";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meine Digitale Speisekarte</title>
        <meta name="description" content="Entwickelt von Fabian Hanso" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Nav />
        <Hero />
        <NumberDisplay />
        <Pricing />
        <Footer />
      </main>
    </>
  );
}
