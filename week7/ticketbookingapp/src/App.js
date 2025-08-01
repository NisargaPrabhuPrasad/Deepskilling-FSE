import React, { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      <h1>Ticket Booking App</h1>

      {isLoggedIn ? <UserPage /> : <GuestPage />}

      <br />
      {isLoggedIn ? (
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button className="login" onClick={handleLogin}>
          Login
        </button>
      )}
    </div>
  );
}

export default App;
