"use client";

import Header from "../../components/Header";
import CartItem from "../../components/CartItem";
import { useCart } from "../../components/Providers";

export default function CartPage() {
  const { cart, total, removeFromCart, clearCart } = useCart();

  return (
    <main>
      <Header />
      <section>
        <h1 className="section-title">Kundvagn</h1>
      </section>

      {cart.length === 0 ? (
        <div className="card">
          <p>Din kundvagn är tom. Lägg till produkter från startsidan.</p>
        </div>
      ) : (
        <div className="grid" style={{ gap: "1.25rem" }}>
          {cart.map((item) => (
            <CartItem key={item.product.id} item={item} onRemove={() => removeFromCart(item.product.id)} />
          ))}

          <div className="form-card">
            <h2>Orderöversikt</h2>
            <p>Totalt: {total.toFixed(2)} kr</p>
            <button className="button" onClick={() => window.location.assign("/checkout")}>Gå till kassan</button>
            <button className="button" style={{ background: "#ef4444", marginTop: "1rem" }} onClick={clearCart}>
              Radera kundvagn
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
