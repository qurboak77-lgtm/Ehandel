"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useCartStore } from "../lib/cartStore";
import { useAuth } from "./Providers";
import { products } from "../lib/products";

export default function Header() {
  const { getTotalItems } = useCartStore();
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [cartBadgeAnimating, setCartBadgeAnimating] = useState(false);
  const [prevTotalItems, setPrevTotalItems] = useState(0);

  // Animate cart badge when items change
  useEffect(() => {
    const currentTotal = getTotalItems();
    if (currentTotal > prevTotalItems) {
      setCartBadgeAnimating(true);
      setTimeout(() => setCartBadgeAnimating(false), 500);
    }
    setPrevTotalItems(currentTotal);
  }, [getTotalItems()]);

  // Filter products based on search
  const searchResults = searchQuery.trim()
    ? products.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Check if a route is active
  const isActive = (href: string) => pathname === href;

  // Close menus when clicking outside
  useEffect(() => {
    const closeMenus = () => {
      setMobileMenuOpen(false);
      setSearchOpen(false);
      setAccountMenuOpen(false);
    };
    if (mobileMenuOpen || searchOpen || accountMenuOpen) {
      document.addEventListener("click", closeMenus);
      return () => document.removeEventListener("click", closeMenus);
    }
  }, [mobileMenuOpen, searchOpen, accountMenuOpen]);

  const handleLogout = () => {
    logout();
    setAccountMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <Link href="/" className="logo">
            <span className="logo-icon">🛍️</span>
            <span className="logo-text">E-handel</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <Link
              href="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
            >
              Start
            </Link>
          </nav>

          {/* Search (Desktop) */}
          <div className="search-container desktop-only">
            <input
              type="text"
              placeholder="Sök produkter..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchOpen(true)}
            />
            {searchQuery && (
              <button
                className="search-clear"
                onClick={() => setSearchQuery("")}
              >
                ✕
              </button>
            )}
            {searchOpen && searchResults.length > 0 && (
              <div className="search-dropdown">
                {searchResults.slice(0, 5).map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    className="search-result"
                    onClick={() => {
                      setSearchQuery("");
                      setSearchOpen(false);
                    }}
                  >
                    <div className="search-result-title">{product.title}</div>
                    <div className="search-result-desc">
                      {product.shortDescription}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Right Side Actions */}
          <div className="header-actions">
            {/* Cart */}
            <Link href="/cart" className="action-button cart-button">
              <span className="cart-icon">🛒</span>
              {getTotalItems() > 0 && (
                <span className={`cart-badge ${cartBadgeAnimating ? "animate" : ""}`}>
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* Account Menu */}
            <div
              className="account-menu-container"
              onClick={() => setAccountMenuOpen(!accountMenuOpen)}
            >
              <button className="action-button account-button">
                <span className="user-icon">👤</span>
                <span className="chevron">▼</span>
              </button>
              {accountMenuOpen && (
                <div className="account-dropdown">
                  {user ? (
                    <>
                      <div className="dropdown-header">
                        Inloggad som<br />
                        <strong>{user.email}</strong>
                      </div>
                      <Link href="/account" className="dropdown-item">
                        Min profil
                      </Link>
                      <Link href="/checkout" className="dropdown-item">
                        Beställningar
                      </Link>
                      <hr className="dropdown-divider" />
                      <button
                        className="dropdown-item logout"
                        onClick={handleLogout}
                      >
                        Logga ut
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="/account" className="dropdown-item">
                        Logga in
                      </Link>
                      <Link href="/account" className="dropdown-item">
                        Skapa konto
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Hamburger Menu */}
            <button
              className="hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className={`hamburger-line ${mobileMenuOpen ? "open" : ""}`}></span>
              <span className={`hamburger-line ${mobileMenuOpen ? "open" : ""}`}></span>
              <span className={`hamburger-line ${mobileMenuOpen ? "open" : ""}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <Link
              href="/"
              className={`mobile-menu-item ${isActive("/") ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Start
            </Link>
            <Link
              href="/cart"
              className={`mobile-menu-item ${isActive("/cart") ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Kundvagn {getTotalItems() > 0 && `(${getTotalItems()})`}
            </Link>
            <Link
              href="/checkout"
              className={`mobile-menu-item ${isActive("/checkout") ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Kassa
            </Link>

            {/* Mobile Search */}
            <div className="mobile-search">
              <input
                type="text"
                placeholder="Sök produkter..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="search-clear"
                  onClick={() => setSearchQuery("")}
                >
                  ✕
                </button>
              )}
              {searchQuery && searchResults.length > 0 && (
                <div className="search-results-mobile">
                  {searchResults.slice(0, 5).map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      className="search-result"
                      onClick={() => {
                        setSearchQuery("");
                        setMobileMenuOpen(false);
                      }}
                    >
                      <div className="search-result-title">{product.title}</div>
                      <div className="search-result-desc">
                        {product.shortDescription}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      <style jsx>{`
        .header {
          background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
          color: white;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding: 1rem 2rem;
          flex-wrap: wrap;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
          text-decoration: none;
          color: white;
          flex-shrink: 0;
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .logo-icon {
          font-size: 1.5rem;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .nav-desktop {
          display: flex;
          gap: 2rem;
          flex: 1;
        }

        .nav-link {
          color: #d1d5db;
          transition: all 0.3s ease;
          position: relative;
          font-weight: 500;
        }

        .nav-link:hover {
          color: white;
        }

        .nav-link.active {
          color: white;
          font-weight: 600;
        }

        .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #2563eb);
          border-radius: 2px;
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from {
            width: 0;
            left: 50%;
          }
          to {
            width: 100%;
            left: 0;
          }
        }

        .search-container {
          position: relative;
          flex: 1;
          min-width: 250px;
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #374151;
          border-radius: 0.5rem;
          background: #374151;
          color: white;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .search-input:focus {
          outline: none;
          border-color: #3b82f6;
          background: #4b5563;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
        }

        .search-input::placeholder {
          color: #9ca3af;
        }

        .search-clear {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.25rem 0.5rem;
          transition: color 0.2s ease;
        }

        .search-clear:hover {
          color: white;
        }

        .search-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #1f2937;
          border: 1px solid #374151;
          border-top: none;
          border-radius: 0 0 0.5rem 0.5rem;
          margin-top: -2px;
          max-height: 400px;
          overflow-y: auto;
          z-index: 10;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .search-result {
          display: block;
          padding: 1rem;
          border-bottom: 1px solid #374151;
          transition: all 0.2s ease;
          text-decoration: none;
          color: #e5e7eb;
        }

        .search-result:last-child {
          border-bottom: none;
        }

        .search-result:hover {
          background: #374151;
          padding-left: 1.5rem;
        }

        .search-result-title {
          font-weight: 600;
          color: white;
          margin-bottom: 0.25rem;
        }

        .search-result-desc {
          font-size: 0.85rem;
          color: #9ca3af;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .action-button {
          background: none;
          border: none;
          color: #d1d5db;
          cursor: pointer;
          font-size: 1.5rem;
          transition: all 0.3s ease;
          padding: 0.5rem;
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .action-button:hover {
          color: white;
          transform: scale(1.1);
        }

        .cart-icon {
          display: inline-block;
        }

        .cart-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          box-shadow: 0 4px 10px rgba(239, 68, 68, 0.4);
          animation: fadeIn 0.2s ease;
        }

        .cart-badge.animate {
          animation: badgePulse 0.5s ease;
        }

        @keyframes badgePulse {
          0% {
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .account-menu-container {
          position: relative;
        }

        .account-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .user-icon {
          display: inline-block;
        }

        .chevron {
          font-size: 0.75rem;
          transition: transform 0.3s ease;
        }

        .account-menu-container:has(.account-dropdown) .chevron {
          transform: rotate(180deg);
        }

        .account-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          background: #1f2937;
          border: 1px solid #374151;
          border-radius: 0.5rem;
          min-width: 200px;
          margin-top: 0.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          z-index: 10;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-header {
          padding: 1rem;
          border-bottom: 1px solid #374151;
          font-size: 0.85rem;
          color: #9ca3af;
        }

        .dropdown-item {
          display: block;
          padding: 0.75rem 1rem;
          color: #d1d5db;
          text-decoration: none;
          transition: all 0.2s ease;
          border: none;
          background: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
          font-size: 0.95rem;
        }

        .dropdown-item:hover {
          background: #374151;
          color: white;
          padding-left: 1.25rem;
        }

        .dropdown-item.logout:hover {
          background: #7f1d1d;
          color: #fecaca;
        }

        .dropdown-divider {
          margin: 0;
          border: none;
          border-top: 1px solid #374151;
        }

        .hamburger {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
          flex-direction: column;
          gap: 0.4rem;
        }

        .hamburger-line {
          width: 24px;
          height: 2px;
          background: white;
          border-radius: 2px;
          transition: all 0.3s ease;
          display: block;
        }

        .hamburger-line.open:nth-child(1) {
          transform: rotate(45deg) translate(10px, 10px);
        }

        .hamburger-line.open:nth-child(2) {
          opacity: 0;
        }

        .hamburger-line.open:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        .mobile-menu {
          display: none;
          background: #111827;
          border-top: 1px solid #374151;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1rem 2rem;
          animation: slideDown 0.3s ease;
        }

        .mobile-menu-item {
          color: #d1d5db;
          text-decoration: none;
          padding: 0.75rem 0;
          transition: all 0.3s ease;
          border-bottom: 1px solid #374151;
          display: block;
        }

        .mobile-menu-item:hover,
        .mobile-menu-item.active {
          color: white;
          padding-left: 0.5rem;
        }

        .mobile-search {
          position: relative;
          margin-top: 0.5rem;
          padding-top: 0.5rem;
          border-top: 1px solid #374151;
        }

        .search-results-mobile {
          margin-top: 0.5rem;
          background: #1f2937;
          border-radius: 0.5rem;
          max-height: 300px;
          overflow-y: auto;
        }

        .desktop-only {
          display: none;
        }

        @media (min-width: 768px) {
          .desktop-only {
            display: block;
          }

          .hamburger {
            display: none !important;
          }

          .mobile-menu {
            display: none !important;
          }
        }

        @media (max-width: 767px) {
          .nav-desktop {
            display: none;
          }

          .search-container {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .header-container {
            gap: 1rem;
          }

          .logo-text {
            font-size: 1.25rem;
          }

          .mobile-menu {
            display: flex;
            width: 100%;
            left: 0;
            right: 0;
            padding: 1rem;
            margin: 0 -2rem;
            width: calc(100% + 4rem);
          }

          .search-container {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .header-container {
            padding: 0.75rem 1rem;
          }

          .logo-text {
            font-size: 1.1rem;
          }

          .action-button {
            font-size: 1.25rem;
          }

          .cart-badge {
            width: 20px;
            height: 20px;
            font-size: 0.65rem;
          }
        }
      `}</style>
    </>
  );
}
