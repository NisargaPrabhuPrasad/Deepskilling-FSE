import React from "react";

function OfficeSpaceList() {
  // Page heading
  const officeHeading = "Available Office Spaces";

  // List of office spaces
  const offices = [
    { name: "Prestige Tech Park", rent: 55000, address: "Bengaluru" },
    { name: "WeWork Galaxy", rent: 75000, address: "MG Road, Bengaluru" },
    { name: "Regus Koramangala", rent: 45000, address: "Koramangala, Bengaluru" },
    { name: "IndiQube Alpha", rent: 62000, address: "Whitefield, Bengaluru" }
  ];

  // Image URL
  const imageUrl =
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=60";

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Heading */}
      <h1>{officeHeading}</h1>

      {/* Office Image */}
      <img
        src={imageUrl}
        alt="Office Space"
        style={{
          width: "100%",
          maxHeight: "300px",
          objectFit: "cover",
          marginBottom: "20px"
        }}
      />

      {/* List of offices */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {offices.map((office, index) => (
          <li
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "15px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}
          >
            <h2>{office.name}</h2>
            <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
              Rent: ₹{office.rent.toLocaleString()}
            </p>
            <p>Address: {office.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OfficeSpaceList;
