"use client";

import Link from "next/link";
import { Product } from "../lib/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="card">
      <Link href={`/product/${product.id}`}>
        <img src={product.images[0]?.url} alt={product.title} />
      </Link>
      <div>
        <h3>{product.title}</h3>
        <p>{product.shortDescription}</p>
      </div>
      <div className="card-footer">
        <span>Från {product.basePrice.toFixed(2)} kr</span>
        <Link href={`/product/${product.id}`} className="button">
          Se detaljer
        </Link>
      </div>
    </article>
  );
}
