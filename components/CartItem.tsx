"use client";

import type { CartItem } from "../lib/types";

interface CartItemProps {
  item: CartItem;
  onRemove: () => void;
}

export default function CartItem({ item, onRemove }: CartItemProps) {
  return (
    <div className="card">
      <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
        <img src={item.product.image} alt={item.product.title} style={{ width: "120px", borderRadius: "0.75rem" }} />
        <div style={{ flex: 1 }}>
          <h3>{item.product.title}</h3>
          <p>{item.product.shortDescription}</p>
          <p>Antal: {item.quantity}</p>
          <p>Pris: {(item.product.price * item.quantity).toFixed(2)} kr</p>
          <button className="button" style={{ background: "#ef4444", marginTop: "0.5rem" }} onClick={onRemove}>
            Ta bort
          </button>
        </div>
      </div>
    </div>
  );
}
