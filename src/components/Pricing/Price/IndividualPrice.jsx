import React from "react";
import styles from "../../../styles/Home.module.css";
import Image from "next/image";

function IndividualPrice() {
  const content = {
    price: "120,00€",
    setup: "100€",
    headline: "Individuell",
    included: ["Alle Premium Komponenten", "100% auf Maß"],
  };

  return (
    <div className={styles.Price}>
      <h4 className={styles.PriceHeadline}>{content.headline}</h4>
      <p className={styles.PricePrice}>
        {content.price}
        <span className={styles.PricePriceSpan}> / pro IT - Stunde</span>
      </p>
      <p className={styles.PricePriceSpan}>+ Keine Einrichtungsgebühr</p>
      <div className={styles.PriceMap}>
        <>
          {content.included.map((item, index) => (
            <div key={index} className={styles.PriceMapItem}>
              <Image src="/check.svg" width={20} height={20} alt="Check" />
              <p>{item}</p>
            </div>
          ))}
          <div className={styles.PriceMapItem}>
            <Image src="/cancel.svg" width={20} height={20} alt="Check" />
            <p className={styles.textOrange}>Hosting nicht inkludiert</p>
          </div>
        </>
      </div>
    </div>
  );
}

export default IndividualPrice;
