"use client";

import Link from "next/link";
import { useCart, useAuth } from "./Providers";

export default function Header() {
  const { cart } = useCart();
  const { user } = useAuth();

  return (
    <header className="header">
      <div>
        <Link className="nav-link" href="/">
          <strong>E-handel</strong>
        </Link>
      </div>
      <nav className="nav-links">
        <Link className="nav-link" href="/">Start</Link>
        <Link className="nav-link" href="/cart">Kundvagn ({cart.length})</Link>
        <Link className="nav-link" href="/checkout">Kassa</Link>
        <Link className="nav-link" href="/account">Konto</Link>
      </nav>
      <div>
        {user ? <span>Inloggad som {user.email}</span> : <span>Ej inloggad</span>}
      </div>
    </header>
  );
}
