"use client";

import Link from "next/link";
import { Product } from "../lib/types";
import { useCart } from "./Providers";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <article className="card">
      <Link href={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>
      <div>
        <h3>{product.title}</h3>
        <p>{product.shortDescription}</p>
      </div>
      <div className="card-footer">
        <span>{product.price.toFixed(2)} kr</span>
        <button className="button" onClick={() => addToCart(product)}>
          Lägg i kundvagn
        </button>
      </div>
    </article>
  );
}
