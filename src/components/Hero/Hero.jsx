import Image from "next/image";
import styles from "../../styles/Home.module.css";
import React from "react";

function Hero() {
  return (
    <div className={styles.Hero}>
      <Image
        className={styles.HeroImage}
        src="/display-test.png"
        width={500}
        height={400}
        alt="Test"
      />
      <div className={styles.HeroTextSection}>
        <h1 className={styles.HeroHeadline}>Digitale Speisekarte</h1>
        <p className={styles.HeroParagraph}>
          Mithilfe unserer digitalen Speisekarte können jederzeit Änderungen an
          Preisen, Beschreibungen, Allergenen, etc. vorgenommen werden, ohne
          Dienste externer Dienstleister in Anspruch nehmen zu müssen.
        </p>
        <a className={styles.HeroLink} href="">
          Angebot einholen
        </a>
      </div>
    </div>
  );
}

export default Hero;
