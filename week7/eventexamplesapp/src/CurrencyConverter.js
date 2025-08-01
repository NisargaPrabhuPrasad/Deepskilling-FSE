import React, { useState } from "react";

function CurrencyConverter() {
  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const conversionRate = 0.011; // Example rate: 1 INR = 0.011 EUR
    setEuros((rupees * conversionRate).toFixed(2));
  };

  return (
    <div>
      <h2>Currency Converter (INR → EUR)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter amount in INR"
          required
        />
        <button type="submit" style={{ marginLeft: "10px" }}>
          Convert
        </button>
      </form>
      {euros && <p>{rupees} INR = {euros} EUR</p>}
    </div>
  );
}

export default CurrencyConverter;
