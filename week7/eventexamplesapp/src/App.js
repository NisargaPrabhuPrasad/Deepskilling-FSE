import React from "react";
import Counter from "./Counter";
import SayWelcome from "./SayWelcome";
import SyntheticEventButton from "./SyntheticEventButton";
import CurrencyConverter from "./CurrencyConverter";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Event Examples</h1>

      {/* Counter with Increment & Decrement */}
      <Counter />

      {/* Say Welcome Button */}
      <SayWelcome />

      {/* Synthetic Event Button */}
      <SyntheticEventButton />

      {/* Currency Converter */}
      <CurrencyConverter />
    </div>
  );
}

export default App;
