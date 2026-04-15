"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import { useCart, useAuth } from "../../components/Providers";

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const { user } = useAuth();
  const [success, setSuccess] = useState(false);
  const [payment, setPayment] = useState({ cardNumber: "", expiry: "", cvc: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user || cart.length === 0) return;
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
        <div className="grid" style={{ gap: "1.5rem" }}>
          <div className="form-card">
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
              <button className="button" type="submit">Betala {total.toFixed(2)} kr</button>
            </form>
            <small>Detta är en demo. Här kan du ansluta Stripe, Klarna eller annan betalningsleverantör.</small>
          </div>

          <div className="form-card">
            <h2>Orderöversikt</h2>
            <p>Antal produkter: {cart.length}</p>
            <p>Totalt: {total.toFixed(2)} kr</p>
          </div>
        </div>
      )}
    </main>
  );
}
