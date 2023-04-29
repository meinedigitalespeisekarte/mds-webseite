import React from "react";
import styles from "../../styles/Home.module.css";

function NumberDisplay() {
  const test = {
    speisekartenheadline: "5+",
    userheadline: "2000+",
    tischschilderheadline: "600",
    lastheadline: "3",
  };

  return (
    <div className={styles.NumberDisplay}>
      <div className={styles.NumberWrapper}>
        <div className={styles.NumberItem}>
          <h3 className={styles.NumberHeadline}>{test.speisekartenheadline}</h3>
          <p className={styles.NumberParagraph}>
            Speisekarten sind bereits bei Kunden in Betrieb
          </p>
        </div>

        <div className={styles.NumberItem}>
          <h3 className={styles.NumberHeadline}>{test.userheadline}</h3>
          <p className={styles.NumberParagraph}>
            Nutzer greifen täglich etwa auf diese Speisekarten zu
          </p>
        </div>

        <div className={styles.NumberItem}>
          <h3 className={styles.NumberHeadline}>
            {test.tischschilderheadline}
          </h3>
          <p className={styles.NumberParagraph}>
            Tischschilder wurden bereits gedruckt und aufgestellt
          </p>
        </div>

        <div className={styles.NumberItem}>
          <h3 className={styles.NumberHeadline}>{test.lastheadline}</h3>
          <p className={styles.NumberParagraph}>
            Fachleute sorgen für einen reibungslosen Ablauf
          </p>
        </div>
      </div>
    </div>
  );
}

export default NumberDisplay;
