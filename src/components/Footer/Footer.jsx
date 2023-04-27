import React from "react";
import styles from "../../styles/Home.module.css";

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div>
        <h5 className={styles.FooterHeadline}>Impressum</h5>
        <p className={styles.FooterContent}>Revice Media</p>
        <p className={styles.FooterContent}>Fabian Hanso</p>
        <p className={styles.FooterContent}>Rheinstraße 13</p>
        <p className={styles.FooterContent}>65556 Limburg an der Lahn</p>
      </div>
      <div>
        <h5 className={styles.FooterHeadline}>Kontakt</h5>
        <a
          href="mailto:mds@revice-media.com"
          className={styles.FooterContentLink}
        >
          mds@revice-media.com
        </a>
      </div>
      <div className={styles.LinksWrapper}>
        <h5 className={styles.FooterHeadline}>Links</h5>
        <a
          href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE"
          target="_Blank"
          className={styles.FooterContentLinkNormal}
        >
          Online-Streitschlichtung
        </a>
        <a
          href="https://www.contentfulstatus.com/"
          target="_Blank"
          className={styles.FooterContentLinkNormal}
        >
          Contentful-Status
        </a>
        <a
          href="https://www.netlifystatus.com/"
          target="_Blank"
          className={styles.FooterContentLinkNormal}
        >
          Netlify-Status
        </a>
      </div>
    </footer>
  );
}

export default Footer;
