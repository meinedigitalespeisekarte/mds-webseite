import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogoText}>
        <Image src="/mds-logo.jpg" width={40} height={40} alt="Logo" />
      </div>
      <a href="mailto:mds@revice-media.com" className={styles.navbarButton}>
        Kontakt
      </a>
    </nav>
  );
}

export default Nav;
