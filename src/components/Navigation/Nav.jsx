import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogoText}>
        <Image src="/mds-logo.jpg" width={40} height={40} alt="Logo" />
      </div>
      <a
        href="https://wa.me/message/K7V2MLCQZGUUC1"
        target="_blank"
        className={styles.navbarButton}
      >
        <Image src="/whatsapp.svg" width={20} height={20} alt="Whatsapp" />
        Whatsapp
      </a>
    </nav>
  );
}

export default Nav;
