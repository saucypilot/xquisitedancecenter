import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xquisite Dance Center | UTA Social Dance Club",
  description:
    "Social dance classes, community updates, videos, and merch links for Xquisite Dance Center.",
};

const footerLinks = [
  {
    label: "Shirts",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdccnvPo4DboJPnXLIQwvsp5bDFumMbiwf58J5UQ6YON_JFwQ/viewform?pli=1",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@xquisitemegacrew2992",
  },
  {
    label: "Discord",
    href: "https://discord.com/invite/YXXanS3awY",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/xquisitemegacrew/#",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/xquisitedancecenter/",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="siteHeader">
          <Link className="brand" href="/" aria-label="Xquisite Dance Center home">
            <Image
              src="/logo.png"
              alt=""
              width={46}
              height={46}
              priority
              className="brandLogo"
            />
            <span>Xquisite</span>
          </Link>

          <nav className="siteNav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#classes">Classes</a>
            <a href="#board">Board</a>
            <a href="#media">Videos</a>
            <a href="#connect">Links</a>
          </nav>
        </header>

        {children}

        <footer className="footer">
          <div className="footerContainer">
            <div>
              <p className="footerTitle">Xquisite Dance Center</p>
              <p className="footerText">
                UTA social dance club. Classes resume Fall 2026.
              </p>
            </div>

            <div className="footerLinks" aria-label="Social links">
              {footerLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
