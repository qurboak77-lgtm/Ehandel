"use client";

import { products } from "../lib/products";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";

const heroImageUrl = "/hero-image.png"; // Byt ut denna fil i public-mappen mot din egen bild

const featuredProducts = products;

export default function HomePage () {
  return (
    <main style={{ padding: 0 }}>
      <Header />

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), url('${heroImageUrl}')` }}>
        <div className="hero-content">
          <div className="hero-tag">QURBO Collection • Exclusive Pieces</div>
          <h1 className="hero-title">Där elegans möter attityd</h1>
          <p className="hero-subtitle">Upptäck våra handplockade kläder och smycken från Qurbo - perfekt för den moderna kvinnan med stil.</p>
          <div className="hero-actions">
            <a href="#products" className="hero-button">Börja Shoppa</a>
            <a href="#brand" className="hero-link">Om oss</a>
          </div>
          <div className="hero-highlights">
            <div className="highlight-card">
              <strong>Populära</strong>
              <span>Guldhalsband</span>
            </div>
            <div className="highlight-card featured">
              <strong>Nyhet</strong>
              <span>Rosa Kortklänning</span>
            </div>
            <div className="highlight-card">
              <strong>Exklusiv</strong>
              <span>Guldarmband</span>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section id="products" className="featured-section">
          <div className="section-headline">
            <div>
              <h2 className="section-title">Utvalda favoriter</h2>
              <p className="section-description">De produkter vi rekommenderar just nu.</p>
            </div>
            <a href="#products" className="section-link">Se alla produkter</a>
          </div>

          <div className="grid grid-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="brand-section" id="brand">
          <div className="brand-copy">
            <p className="eyebrow">Om oss</p>
            <h2>Där elegans möter attityd. Utvalda kläder och smycken från Qurbo.</h2>
            <p>Vi på Qurbo väljer ut varje plagg med fokus på kvalitet, hållbarhet och tidlös design. Här hittar du kläder och smycken som fungerar både till vardag och fest.</p>
            <ul className="brand-benefits">
              <li>Handplockade av QURBO</li>
              <li>Hållbar svensk design</li>
              <li>Snabba leveranser</li>
            </ul>
          </div>
          <div className="brand-image"></div>
        </section>

        <section className="promo-section">
          <div className="promo-card">
            <span className="promo-label">Erbjudande just nu</span>
            <h3>15% på utvalda nyheter</h3>
            <p>Passa på att uppdatera garderoben med exklusiva nyheter.</p>
            <a href="#products" className="promo-button">Shoppa nu</a>
          </div>
          <div className="promo-card secondary">
            <span className="promo-label">Kunder gillar också</span>
            <h3>Välj rätt kombination</h3>
            <p>Upptäck matchande plagg och accessoarer som gör looken komplett.</p>
            <a href="#products" className="promo-button">Utforska</a>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-item">
            Fri frakt över 499 kr
          </div>
          <div className="footer-item">
            Snabb leverans inom 1-3 dagar
          </div>
          <div className="footer-item">
            Trygg betalning & 5/5 stjärnor
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-links-group">
            <a href="#brand">Om oss</a>
            <a href="#products">Produkter</a>
            <a href="/cart">Kundvagn</a>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Pinterest">Pinterest</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .hero {
          background-size: cover;
          background-position: center;
          min-height: 620px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 720px;
          padding: 2rem;
          animation: fadeInUp 0.8s ease;
        }

        .hero-tag {
          display: inline-flex;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.15);
          font-size: 0.9rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          color: #f8fafc;
          border: 1px solid rgba(255,255,255,0.16);
        }

        .hero-title {
          font-size: clamp(3rem, 5vw, 4.5rem);
          font-weight: 900;
          margin: 0 0 1rem;
          line-height: 0.95;
          text-shadow: 3px 3px 30px rgba(0,0,0,0.4);
        }

        .hero-subtitle {
          font-size: 1.15rem;
          max-width: 44rem;
          margin: 0 auto 2rem;
          line-height: 1.7;
          color: #e5e7eb;
        }

        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .hero-button,
        .hero-link,
        .promo-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 1rem 2rem;
          font-weight: 700;
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .hero-button {
          background: white;
          color: #111827;
          box-shadow: 0 18px 40px rgba(15,23,42,0.22);
        }

        .hero-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 22px 45px rgba(15,23,42,0.25);
        }

        .hero-link {
          background: rgba(255,255,255,0.14);
          color: #f8fafc;
          border: 1px solid rgba(255,255,255,0.22);
        }

        .hero-link:hover {
          background: rgba(255,255,255,0.2);
        }

        .hero-highlights {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
          margin-top: 2rem;
        }

        .highlight-card {
          background: rgba(255,255,255,0.1);
          padding: 1rem 1.25rem;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 1rem;
          color: #f8fafc;
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .highlight-card:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,0.18);
        }

        .highlight-card strong {
          display: block;
          margin-bottom: 0.4rem;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .highlight-card.featured {
          background: rgba(245,158,11,0.16);
          border-color: rgba(245,158,11,0.3);
        }

        .trust-bar {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
          padding: 1.5rem 2rem;
          margin: -2rem auto 2rem;
          max-width: 1200px;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 18px 50px rgba(15,23,42,0.08);
          position: relative;
          z-index: 2;
        }

        .trust-bar div {
          font-weight: 600;
          text-align: center;
        }

        .page-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem 3rem;
          display: grid;
          gap: 2.5rem;
        }

        .featured-section {
          padding-top: 2rem;
        }

        .section-headline {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .section-description {
          color: #4b5563;
          max-width: 34rem;
          margin-top: 0.5rem;
        }

        .section-link {
          color: #2563eb;
          text-decoration: none;
          font-weight: 700;
        }

        .brand-section {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2rem;
          align-items: center;
          background: #f8fafc;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 20px 50px rgba(15,23,42,0.06);
        }

        .brand-copy {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.8rem;
          color: #2563eb;
          margin: 0;
        }

        .brand-copy h2 {
          margin: 0;
          font-size: clamp(2rem, 3vw, 2.75rem);
          line-height: 1.05;
        }

        .brand-copy p {
          color: #4b5563;
          line-height: 1.8;
          max-width: 48rem;
        }

        .brand-benefits {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
          padding: 0;
          list-style: none;
          margin: 0;
        }

        .brand-benefits li {
          padding: 1rem;
          background: white;
          border-radius: 0.85rem;
          box-shadow: 0 10px 30px rgba(15,23,42,0.06);
          font-weight: 600;
          color: #111827;
        }

        .brand-image {
          min-height: 360px;
          border-radius: 1rem;
          background: url('/hero-image.png') center/cover no-repeat;
        }

        .promo-section {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.5rem;
        }

        .promo-card {
          background: white;
          border-radius: 1.25rem;
          padding: 2rem;
          box-shadow: 0 20px 50px rgba(15,23,42,0.06);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .promo-card.secondary {
          background: linear-gradient(180deg, #111827 0%, #1f2937 100%);
          color: white;
        }

        .promo-label {
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.8rem;
          color: #2563eb;
          font-weight: 700;
        }

        .promo-card.secondary .promo-label {
          color: #a5b4fc;
        }

        .promo-card h3 {
          margin: 0;
          font-size: 1.75rem;
        }

        .promo-card p {
          margin: 0;
          color: inherit;
          line-height: 1.8;
        }

        .promo-button {
          background: #2563eb;
          color: white;
          width: fit-content;
        }

        .promo-card.secondary .promo-button {
          background: white;
          color: #111827;
        }

        .footer {
          background: #111827;
          color: #e5e7eb;
          padding: 2rem 2rem 1.5rem;
          margin-top: 2rem;
          border-radius: 1rem;
          box-shadow: 0 20px 50px rgba(15,23,42,0.08);
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
          text-align: center;
        }

        .footer-item {
          font-weight: 600;
          color: #f8fafc;
        }

        .footer-item span {
          display: block;
          margin-top: 0.5rem;
          font-weight: 400;
          color: #9ca3af;
        }

        .footer-links {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-top: 1.75rem;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 1.5rem;
          flex-wrap: wrap;
        }

        .footer-links-group,
        .footer-social {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .footer-links a,
        .footer-social a {
          color: #cbd5e1;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .footer-links a:hover,
        .footer-social a:hover {
          color: white;
          transform: translateY(-1px);
        }

        @media (max-width: 1024px) {
          .footer {
            padding: 1.75rem 1.5rem 1.25rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
          }
        

          .brand-section {
            grid-template-columns: 1fr;
          }

          .promo-section {
            grid-template-columns: 1fr;
          }

          .hero-highlights {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero {
            min-height: 520px;
            padding: 2rem 1.25rem;
          }

          .hero-content {
            padding: 1.5rem;
          }

          .section-title {
            font-size: clamp(1.75rem, 5vw, 2.25rem);
          }

          .page-content {
            padding: 0 1rem 2rem;
          }
        }
      `}</style>
    </main>
  );
}
