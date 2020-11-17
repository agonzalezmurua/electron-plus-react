import React from "react";

export default function ProductCard() {
  return (
    <div className="bg-white rounded-lg p-6">
      <img className="h-16 w-16 rou" src="avatar.jpg" />
      <div>
        <h2>Erin Lindford</h2>
        <div>Product Engineer</div>
        <div>erinlindford@example.com</div>
        <div>(555) 765-4321</div>
      </div>
    </div>
  )
}
