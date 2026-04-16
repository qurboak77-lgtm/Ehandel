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
          <h3 style={{ color: "white", marginBottom: "1rem" }}>QURBO</h3>
          <p>Där elegans möter attityd. Utvalda kläder och smycken från Qurbo.</p>
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
              <a href="mailto:support@qurbo.se" style={{ color: "#d1d5db", textDecoration: "none" }}>
                support@qurbo.se
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <span>Tel: 010-987 65 43</span>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <span>Mån-Fre: 10-18, Lör: 10-16</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: "white", marginBottom: "1rem" }}>Följ oss</h4>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a href="https://instagram.com/qurbo" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "1.5rem" }} title="Följ oss på Instagram">📷</a>
            <a href="https://facebook.com/qurbo" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "1.5rem" }} title="Följ oss på Facebook">📘</a>
            <a href="https://pinterest.com/qurbo" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "1.5rem" }} title="Följ oss på Pinterest">📌</a>
          </div>
        </div>
      </div>

      <div style={{
        borderTop: "1px solid #374151",
        paddingTop: "1.5rem",
        fontSize: "0.875rem"
      }}>
        <p>&copy; 2024 QURBO. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
}