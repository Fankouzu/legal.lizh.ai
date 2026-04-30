import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://legal.lizh.ai"),
  title: "Lychee AI Legal",
  description: "Public legal and support pages for Lychee AI.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <header className="nav">
            <Link href="/" className="brand">
              Lychee AI Legal
            </Link>
            <nav className="nav-links">
              <Link className="nav-pill" href="/privacy">
                Privacy
              </Link>
              <Link className="nav-pill" href="/terms">
                Terms
              </Link>
              <Link className="nav-pill" href="/support">
                Support
              </Link>
            </nav>
          </header>
          {children}
          <footer className="footer">
            Contact: support@lizh.ai
          </footer>
        </div>
      </body>
    </html>
  );
}
