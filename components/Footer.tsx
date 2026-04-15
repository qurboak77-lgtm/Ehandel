"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: "#1f2937",
      color: "#d1d5db",
      padding: "2rem 2rem",
      marginTop: "auto",
      textAlign: "center"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "2rem",
        marginBottom: "1.5rem"
      }}>
        <div>
          <h3 style={{ color: "white", marginBottom: "1rem" }}>E-handel</h3>
          <p>Din favoritbutik för mode och stil. Vi erbjuder kvalitetskläder till bra priser.</p>
        </div>

        <div>
          <h4 style={{ color: "white", marginBottom: "1rem" }}>Snabblänkar</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link href="/" style={{ color: "#d1d5db", textDecoration: "none" }}>
                Start
              </Link>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link href="/cart" style={{ color: "#d1d5db", textDecoration: "none" }}>
                Kundvagn
              </Link>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link href="/account" style={{ color: "#d1d5db", textDecoration: "none" }}>
                Mitt konto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: "white", marginBottom: "1rem" }}>Kundservice</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="mailto:support@ehandel.se" style={{ color: "#d1d5db", textDecoration: "none" }}>
                support@ehandel.se
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <span>Tel: 08-123 45 67</span>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <span>Mån-Fre: 9-17</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: "white", marginBottom: "1rem" }}>Följ oss</h4>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a href="#" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "1.5rem" }}>📘</a>
            <a href="#" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "1.5rem" }}>📷</a>
            <a href="#" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "1.5rem" }}>🐦</a>
          </div>
        </div>
      </div>

      <div style={{
        borderTop: "1px solid #374151",
        paddingTop: "1.5rem",
        fontSize: "0.875rem"
      }}>
        <p>&copy; 2024 E-handel. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
}