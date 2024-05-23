/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function PriceCard({ label, price, features }) {
  return (
    <div
      className={`price-card ${
        label === "Professional" ? "professional-container " : ""
      }`}
    >
      <h3 className="type">{label}</h3>

      <div className="price">
        <span className="dollar-mark">$</span>
        <span className="price-digit">{price}</span>
      </div>

      <hr />
      {features.map((feature, index) => (
        <>
          <h3 key={feature} className="feature">
            {feature}
          </h3>
          <hr />
        </>
      ))}
      <button className="learn-more-button">LEARN MORE</button>
    </div>
  );
}
