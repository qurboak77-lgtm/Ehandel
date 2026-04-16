"use client";

import { products } from "../lib/products";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <main style={{ padding: 0 }}>
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">StilrenMode för Moderna Kvinnor</h1>
          <p className="hero-subtitle">Upptäck vår exklusiva kollektion av damkläder, skor och accessoarer</p>
          <button className="hero-button">Börja Shoppa</button>
        </div>
      </section>

      {/* Main Content */}
      <div style={{ padding: "2rem" }}>
        <section>
          <h2 className="section-title">Välkommen till Vår E-handel</h2>
          <p>Bläddra bland produkter, lägg i kundvagnen och genomför din beställning.</p>
        </section>

        <section style={{ marginTop: "2rem" }}>
          <h2 className="section-title">Populära Produkter</h2>
          <div className="grid grid-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%),
            url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop') center/cover;
          background-blend-mode: overlay;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 600px;
          padding: 2rem;
          animation: fadeInUp 0.8s ease;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin: 0 0 1rem 0;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          letter-spacing: -0.5px;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin: 0 0 2rem 0;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
          line-height: 1.6;
          font-weight: 300;
        }

        .hero-button {
          background: white;
          color: #667eea;
          border: none;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 700;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          letter-spacing: 0.5px;
        }

        .hero-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          background: #f0f0f0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero {
            height: 350px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .hero-button {
            padding: 0.75rem 2rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </main>
  );
}
