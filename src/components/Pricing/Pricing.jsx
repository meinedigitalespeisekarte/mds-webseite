import React from "react";
import styles from "../../styles/Home.module.css";
import Price from "./Price/Price";
import IndividualPrice from "./Price/IndividualPrice";

function Pricing() {
  const firstContent = {
    headline: "Standard",
    price: "25,00€",
    setup: "120€",
    included: ["Speisekarte", "Basic Support", "Hosting inklusive", "QR-Code"],
  };

  const secondContent = {
    headline: "Premium",
    price: "30,00€",
    setup: "100€",
    included: [
      "Speisekarte",
      "Events oder Jobs",
      "Bevorzugter Support",
      "Hosting inklusive",
      "QR-Code",
    ],
  };

  return (
    <div className={styles.Pricing}>
      <h3 className={styles.sectionHeadline}>Unsere Preise</h3>
      <div className={styles.pricingWrapper}>
        <Price content={firstContent} />
        <Price content={secondContent} />
        <IndividualPrice />
      </div>
      <p className={styles.PricePriceSpan}>
        * Die Zahlung ist jährlich im voraus für den angesetzten Zeitraum zu
        entrichten.
      </p>
    </div>
  );
}

export default Pricing;
