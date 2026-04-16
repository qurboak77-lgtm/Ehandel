"use client";

import Header from "../../components/Header";
import CartItem from "../../components/CartItem";
import { useCartStore } from "../../lib/cartStore";

export default function CartPage() {
  const { items, getTotalItems, getTotalPrice, clearCart } = useCartStore();

  return (
    <main>
      <Header />
      <section>
        <h1 className="section-title">Kundvagn</h1>
      </section>

      {items.length === 0 ? (
        <div className="card">
          <p>Din kundvagn är tom. Lägg till produkter från startsidan.</p>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {items.map((item, index) => (
              <CartItem key={`${item.product.id}-${index}`} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <h2>Orderöversikt</h2>
            <div className="summary-row">
              <span>Antal produkter:</span>
              <span>{getTotalItems()}</span>
            </div>
            <div className="summary-row total-row">
              <span>Totalt:</span>
              <span>{getTotalPrice().toFixed(2)} kr</span>
            </div>
            <button
              className="checkout-btn"
              onClick={() => window.location.assign("/checkout")}
            >
              Gå till kassan
            </button>
            <button
              className="clear-cart-btn"
              onClick={clearCart}
            >
              Rensa kundvagn
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .cart-container {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 2rem;
          margin-top: 2rem;
        }

        .cart-items {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cart-summary {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
          padding: 2rem;
          height: fit-content;
          position: sticky;
          top: 2rem;
        }

        .cart-summary h2 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #111827;
          margin: 0 0 1.5rem 0;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 0;
          border-bottom: 1px solid #e5e7eb;
        }

        .summary-row:last-child {
          border-bottom: none;
        }

        .total-row {
          font-size: 1.25rem;
          font-weight: 600;
          color: #059669;
          border-top: 2px solid #e5e7eb;
          margin-top: 1rem;
          padding-top: 1rem;
        }

        .checkout-btn {
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
          margin-top: 1.5rem;
        }

        .checkout-btn:hover {
          background: #1d4ed8;
        }

        .clear-cart-btn {
          width: 100%;
          padding: 0.75rem;
          background: #ef4444;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s ease;
          margin-top: 1rem;
        }

        .clear-cart-btn:hover {
          background: #dc2626;
        }

        @media (max-width: 1024px) {
          .cart-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .cart-summary {
            position: static;
            order: -1;
          }
        }
      `}</style>
    </main>
  );
}
