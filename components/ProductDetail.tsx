"use client";

import { Product } from "../lib/types";
import { useCart } from "./Providers";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart } = useCart();

  return (
    <section>
      <div style={{ display: "grid", gap: "2rem", marginTop: "2rem" }}>
        <div className="card" style={{ padding: 0 }}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className="form-card">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p><strong>Pris: {product.price.toFixed(2)} kr</strong></p>
          <button className="button" onClick={() => addToCart(product)}>
            Lägg i kundvagn
          </button>
          <p style={{ marginTop: "1rem" }}><strong>Detaljer</strong></p>
          <ul>
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
