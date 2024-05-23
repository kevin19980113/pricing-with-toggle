import { useState } from "react";
import { priceData } from "../priceData";
import PriceCard from "./PriceCard";
export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  function toggleHandle() {
    setIsMonthly((prev) => !prev);
  }

  return (
    <>
      <header className="header">
        <h1>Our Pricing</h1>
        <div className="toggle-button-container ">
          <label>Annually</label>
          <button className="toggle-button" onClick={toggleHandle}>
            <div className={`thumb ${isMonthly ? "toggled" : ""}`}></div>
          </button>
          <label>Monthly</label>
        </div>
      </header>

      <div className="pricing-wrapper">
        {priceData.map((data) => (
          <PriceCard
            key={data.label}
            price={isMonthly ? data.price.monthly : data.price.annually}
            label={data.label}
            features={data.features}
          />
        ))}
      </div>
    </>
  );
}
