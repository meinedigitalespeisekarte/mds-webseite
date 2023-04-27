import React from "react";
import styles from "../../../styles/Home.module.css";
import Image from "next/image";

function Price({ content }) {
  console.log(content);

  return (
    <div className={styles.Price}>
      <h4 className={styles.PriceHeadline}>{content.headline}</h4>
      <p className={styles.PricePrice}>
        {content.price}
        <span className={styles.PricePriceSpan}> / pro Monat *</span>
      </p>
      <p className={styles.PricePriceSpan}>
        + Einmalige Einrichtung für: {content.setup}
      </p>
      <div className={styles.PriceMap}>
        {content.included.map((item, index) => (
          <div key={index} className={styles.PriceMapItem}>
            <Image src="/check.svg" width={20} height={20} alt="Check" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Price;
