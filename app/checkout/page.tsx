"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import { useCartStore } from "../../lib/cartStore";
import { useAuth } from "../../components/Providers";

export default function CheckoutPage() {
  const { items, getTotalItems, getTotalPrice, clearCart } = useCartStore();
  const { user } = useAuth();
  const [success, setSuccess] = useState(false);
  const [payment, setPayment] = useState({ cardNumber: "", expiry: "", cvc: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user || items.length === 0) return;
    setSuccess(true);
    clearCart();
  };

  if (!user) {
    return (
      <main>
        <Header />
        <section className="form-card">
          <h1 className="section-title">Logga in för att gå till kassan</h1>
          <p>Du måste vara inloggad för att slutföra köpet.</p>
          <button className="button" onClick={() => window.location.assign("/account")}>Till inloggning</button>
        </section>
      </main>
    );
  }

  return (
    <main>
      <Header />
      <section>
        <h1 className="section-title">Kassa</h1>
      </section>

      {success ? (
        <div className="form-card alert">
          <h2>Betalning mottagen</h2>
          <p>Tack för din beställning, {user.email}! Din order är slutförd.</p>
        </div>
      ) : (
        <div className="checkout-container">
          <div className="checkout-form">
            <h2>Betalningsinformation</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="cardNumber">Kortnummer</label>
                <input
                  id="cardNumber"
                  type="text"
                  value={payment.cardNumber}
                  onChange={(event) => setPayment({ ...payment, cardNumber: event.target.value })}
                  placeholder="4242 4242 4242 4242"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="expiry">Giltigt till</label>
                <input
                  id="expiry"
                  type="text"
                  value={payment.expiry}
                  onChange={(event) => setPayment({ ...payment, expiry: event.target.value })}
                  placeholder="12/34"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="cvc">CVC</label>
                <input
                  id="cvc"
                  type="text"
                  value={payment.cvc}
                  onChange={(event) => setPayment({ ...payment, cvc: event.target.value })}
                  placeholder="123"
                  required
                />
              </div>
              <button className="checkout-btn" type="submit">
                Betala {getTotalPrice().toFixed(2)} kr
              </button>
            </form>
            <small>Detta är en demo. Här kan du ansluta Stripe, Klarna eller annan betalningsleverantör.</small>
          </div>

          <div className="order-summary">
            <h2>Orderöversikt</h2>
            <div className="order-items">
              {items.map((item, index) => (
                <div key={index} className="order-item">
                  <div className="order-item-info">
                    <span className="order-item-name">{item.product.title}</span>
                    {item.selectedVariants.length > 0 && (
                      <span className="order-item-variants">
                        {item.selectedVariants.map(selectedVariant => {
                          const variantGroup = item.product.variantGroups.find(group => group.id === selectedVariant.groupId);
                          const variant = variantGroup?.variants.find(v => v.id === selectedVariant.variantId);
                          return `${variantGroup?.name}: ${variant?.name}`;
                        }).join(', ')}
                      </span>
                    )}
                    <span className="order-item-quantity">Antal: {item.quantity}</span>
                  </div>
                  <span className="order-item-price">{item.totalPrice.toFixed(2)} kr</span>
                </div>
              ))}
            </div>
            <div className="order-total">
              <div className="summary-row">
                <span>Antal produkter:</span>
                <span>{getTotalItems()}</span>
              </div>
              <div className="summary-row total-row">
                <span>Totalt:</span>
                <span>{getTotalPrice().toFixed(2)} kr</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .checkout-container {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 2rem;
          margin-top: 2rem;
        }

        .checkout-form {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
          padding: 2rem;
        }

        .checkout-form h2 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #111827;
          margin: 0 0 1.5rem 0;
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
          margin-top: 1rem;
        }

        .checkout-btn:hover {
          background: #1d4ed8;
        }

        .order-summary {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
          padding: 2rem;
          height: fit-content;
        }

        .order-summary h2 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #111827;
          margin: 0 0 1.5rem 0;
        }

        .order-items {
          margin-bottom: 2rem;
        }

        .order-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 1rem 0;
          border-bottom: 1px solid #e5e7eb;
        }

        .order-item:last-child {
          border-bottom: none;
        }

        .order-item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .order-item-name {
          font-weight: 600;
          color: #111827;
        }

        .order-item-variants {
          font-size: 0.875rem;
          color: #6b7280;
          font-style: italic;
        }

        .order-item-quantity {
          font-size: 0.875rem;
          color: #6b7280;
        }

        .order-item-price {
          font-weight: 600;
          color: #059669;
        }

        .order-total {
          border-top: 2px solid #e5e7eb;
          padding-top: 1rem;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
        }

        .total-row {
          font-size: 1.25rem;
          font-weight: 600;
          color: #059669;
          margin-top: 0.5rem;
        }

        @media (max-width: 1024px) {
          .checkout-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .order-summary {
            order: -1;
          }
        }
      `}</style>
    </main>
  );
}
