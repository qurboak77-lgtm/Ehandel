"use client";

import { useCartStore } from "../lib/cartStore";
import type { CartItem } from "../lib/types";

interface CartItemProps {
  item: CartItem;
}

export default function CartItemComponent({ item }: CartItemProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(item.product.id, item.selectedVariants, newQuantity);
  };

  const handleRemove = () => {
    removeItem(item.product.id, item.selectedVariants);
  };

  // Formatera valda varianter för visning
  const formatSelectedVariants = () => {
    return item.selectedVariants.map(selectedVariant => {
      const variantGroup = item.product.variantGroups.find(group => group.id === selectedVariant.groupId);
      const variant = variantGroup?.variants.find(v => v.id === selectedVariant.variantId);
      return `${variantGroup?.name}: ${variant?.name}`;
    }).join(', ');
  };

  return (
    <div className="cart-item">
      <div className="cart-item-content">
        <img
          src={item.product.images[0]?.url}
          alt={item.product.title}
          className="cart-item-image"
        />
        <div className="cart-item-details">
          <h3 className="cart-item-title">{item.product.title}</h3>
          {item.selectedVariants.length > 0 && (
            <p className="cart-item-variants">{formatSelectedVariants()}</p>
          )}
          <p className="cart-item-price">
            {(item.totalPrice / item.quantity).toFixed(2)} kr / st
          </p>
          <p className="cart-item-total">
            Totalt: {item.totalPrice.toFixed(2)} kr
          </p>
        </div>
      </div>

      <div className="cart-item-controls">
        <div className="quantity-controls">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="quantity-btn"
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="quantity-display">{item.quantity}</span>
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="quantity-btn"
          >
            +
          </button>
        </div>
        <button onClick={handleRemove} className="remove-btn">
          Ta bort
        </button>
      </div>

      <style jsx>{`
        .cart-item {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(15, 23, 42, 0.08);
          padding: 1.5rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .cart-item-content {
          display: flex;
          gap: 1rem;
          flex: 1;
        }

        .cart-item-image {
          width: 80px;
          height: 80px;
          border-radius: 0.5rem;
          object-fit: cover;
          flex-shrink: 0;
        }

        .cart-item-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .cart-item-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #111827;
          margin: 0;
        }

        .cart-item-variants {
          font-size: 0.875rem;
          color: #6b7280;
          margin: 0;
          font-style: italic;
        }

        .cart-item-price {
          font-size: 0.875rem;
          color: #6b7280;
          margin: 0;
        }

        .cart-item-total {
          font-size: 1rem;
          font-weight: 600;
          color: #059669;
          margin: 0;
        }

        .cart-item-controls {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: flex-end;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .quantity-btn {
          width: 32px;
          height: 32px;
          border: 1px solid #d1d5db;
          background: white;
          border-radius: 0.375rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          color: #374151;
          transition: all 0.2s ease;
        }

        .quantity-btn:hover:not(:disabled) {
          background: #f3f4f6;
          border-color: #9ca3af;
        }

        .quantity-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .quantity-display {
          min-width: 40px;
          text-align: center;
          font-weight: 600;
          color: #374151;
        }

        .remove-btn {
          padding: 0.5rem 1rem;
          background: #ef4444;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .remove-btn:hover {
          background: #dc2626;
        }

        @media (max-width: 768px) {
          .cart-item {
            flex-direction: column;
            gap: 1rem;
          }

          .cart-item-controls {
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
          }

          .quantity-controls {
            order: 1;
          }

          .remove-btn {
            order: 2;
          }
        }
      `}</style>
    </div>
  );
}
