"use client";

import { useState } from "react";
import { useCartStore } from "../lib/cartStore";
import ImageGallery from "./ImageGallery";
import VariantSelector from "./VariantSelector";
import type { Product, SelectedVariant } from "../lib/types";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedVariants, setSelectedVariants] = useState<SelectedVariant[]>([]);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  // Beräkna totalpris inklusive variantmodifieringar
  const calculateTotalPrice = () => {
    let total = product.basePrice;

    selectedVariants.forEach(selectedVariant => {
      const variantGroup = product.variantGroups.find(group => group.id === selectedVariant.groupId);
      if (variantGroup) {
        const variant = variantGroup.variants.find(v => v.id === selectedVariant.variantId);
        if (variant?.priceModifier) {
          total += variant.priceModifier;
        }
      }
    });

    return total * quantity;
  };

  const handleVariantChange = (groupId: string, variantId: string) => {
    setSelectedVariants(prev => {
      const existing = prev.findIndex(sv => sv.groupId === groupId);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = { groupId, variantId };
        return updated;
      } else {
        return [...prev, { groupId, variantId }];
      }
    });
  };

  const handleAddToCart = () => {
    // Kontrollera att alla variantgrupper har valts
    const requiredGroups = product.variantGroups.length;
    const selectedGroups = new Set(selectedVariants.map(sv => sv.groupId)).size;

    if (selectedGroups < requiredGroups) {
      alert("Vänligen välj alla varianter innan du lägger till i kundvagnen.");
      return;
    }

    addItem(product, selectedVariants, quantity);
    alert("Produkten har lagts till i kundvagnen!");
  };

  const canAddToCart = () => {
    const requiredGroups = product.variantGroups.length;
    const selectedGroups = new Set(selectedVariants.map(sv => sv.groupId)).size;
    return selectedGroups === requiredGroups;
  };

  return (
    <section className="product-detail">
      <div className="product-grid">
        {/* Bildgalleri */}
        <div className="product-images">
          <ImageGallery images={product.images} productTitle={product.title} />
        </div>

        {/* Produktinformation */}
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-price">{calculateTotalPrice().toFixed(2)} kr</p>
          <p className="product-description">{product.description}</p>

          {/* Variantväljare */}
          {product.variantGroups.length > 0 && (
            <div className="variants-section">
              <h3>Välj varianter</h3>
              <VariantSelector
                variantGroups={product.variantGroups}
                selectedVariants={selectedVariants}
                onVariantChange={handleVariantChange}
              />
            </div>
          )}

          {/* Antal och lägg till i kundvagn */}
          <div className="add-to-cart-section">
            <div className="quantity-selector">
              <label htmlFor="quantity">Antal:</label>
              <div className="quantity-controls">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="quantity-btn"
                >
                  -
                </button>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="quantity-input"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!canAddToCart()}
              className={`add-to-cart-btn ${canAddToCart() ? '' : 'disabled'}`}
            >
              Lägg i kundvagn
            </button>
          </div>

          {/* Produktfeatures */}
          <div className="product-features">
            <h3>Detaljer</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-detail {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .product-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .product-images {
          width: 100%;
        }

        .product-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .product-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #111827;
          margin: 0;
        }

        .product-price {
          font-size: 2rem;
          font-weight: 600;
          color: #059669;
          margin: 0;
        }

        .product-description {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #6b7280;
          margin: 0;
        }

        .variants-section {
          border-top: 1px solid #e5e7eb;
          padding-top: 1.5rem;
        }

        .variants-section h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 1rem 0;
        }

        .add-to-cart-section {
          background: #f9fafb;
          border-radius: 1rem;
          padding: 1.5rem;
          border: 1px solid #e5e7eb;
        }

        .quantity-selector {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .quantity-selector label {
          font-weight: 600;
          color: #374151;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .quantity-btn {
          width: 40px;
          height: 40px;
          border: 1px solid #d1d5db;
          background: white;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.25rem;
          font-weight: 600;
          color: #374151;
          transition: all 0.2s ease;
        }

        .quantity-btn:hover {
          background: #f3f4f6;
          border-color: #9ca3af;
        }

        .quantity-input {
          width: 60px;
          height: 40px;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          text-align: center;
          font-size: 1rem;
          font-weight: 600;
        }

        .add-to-cart-btn {
          width: 100%;
          padding: 1rem;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .add-to-cart-btn:hover:not(.disabled) {
          background: #1d4ed8;
        }

        .add-to-cart-btn.disabled {
          background: #9ca3af;
          cursor: not-allowed;
        }

        .product-features {
          border-top: 1px solid #e5e7eb;
          padding-top: 1.5rem;
        }

        .product-features h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 1rem 0;
        }

        .product-features ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 0.5rem;
        }

        .product-features li {
          padding: 0.5rem 0;
          border-bottom: 1px solid #f3f4f6;
          color: #6b7280;
        }

        .product-features li:last-child {
          border-bottom: none;
        }

        @media (max-width: 768px) {
          .product-detail {
            padding: 1rem;
          }

          .product-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .product-title {
            font-size: 2rem;
          }

          .product-price {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
}
