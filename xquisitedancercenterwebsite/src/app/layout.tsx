import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xquisite Dance Center",
  description: "Dance meets passion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header>
          <div className="leftSideHeader">
            <Image src="/logo.png" alt="Xquisite Dance Center Logo" width={50} height={50}/>
            <div className="title">
                Xquisite Dance Center
            </div>
          </div>
          <nav className="rightSideHeader">
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/classes">Classes</a></li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className="footer">
          <div className="footerContainer">
            <div className="footer-left">
              <span style={{ fontSize: "0.98rem", opacity: 0.7 }}>
                &copy; {new Date().getFullYear()} Xquisite Dance Center. All rights reserved.
              </span>
            </div>
            <div className="footer-right">
              <span className="footer-contact" style={{ fontWeight: 500, marginRight: "1rem" }}>
                Contact us:
              </span>
              <div className="social-links">
                <a href="https://discord.gg/y4CnAWQc" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                  <img src="/discord.png" alt="Discord logo" />
                </a>
                <a href="https://www.instagram.com/xquisitedancecenter/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <img src="/instagram.png" alt="Instagram logo" />
                </a>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
