import type { ReactNode } from "react";
import "./globals.css";
import { Providers } from "../components/Providers";
import Footer from "../components/Footer";

export const metadata = {
  title: "E-handel",
  description: "En enkel e-handelsdemo byggd med Next.js",
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
