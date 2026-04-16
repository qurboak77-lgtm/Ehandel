import type { ReactNode } from "react";
import "./globals.css";
import { Providers } from "../components/Providers";
import Footer from "../components/Footer";

export const metadata = {
  title: "QURBO",
  description: "Där elegans möter attityd. Utvalda kläder och smycken från Qurbo.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
