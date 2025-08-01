import React from "react";

function UserPage() {
  return (
    <div>
      <h2>Welcome Back!</h2>
      <p>You can now book your tickets.</p>
      <form>
        <label>
          Select Flight:
          <select>
            <option>Flight 101 - Bengaluru → Mumbai - ₹4500</option>
            <option>Flight 202 - Delhi → Chennai - ₹5500</option>
            <option>Flight 303 - Hyderabad → Kolkata - ₹6000</option>
          </select>
        </label>
        <br /><br />
        <button type="submit" className="login">Book Ticket</button>
      </form>
    </div>
  );
}

export default UserPage;
