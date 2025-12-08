import React from "react";

export default function ProductsApp() {
  const products = [
    { id: 1, name: "iPhone 16" },
    { id: 2, name: "MacBook Pro" },
    { id: 3, name: "AirPods Max" },
  ];

  return (
    <div style={{ border: "2px solid #ccc", padding: 16 }}>
      <h2>Products Microfrontend</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
