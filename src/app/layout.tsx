import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { YouTubeBanner } from "@/components/Social";
import { AdBanner } from "@/components/AdBanner";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - سایت خنده و استندآپ کمدی`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name}: سایت خنده و استندآپ کمدی`,
    description: `${siteConfig.name} | ${siteConfig.shortDescription}`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name}: سایت خنده و استندآپ کمدی`,
    description: `${siteConfig.name} | ${siteConfig.shortDescription}`,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: siteConfig.language,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/og-default.png`,
  sameAs: [
    "https://youtube.com/iraniandiaspora",
    "https://www.instagram.com/y22.ir",
    "https://www.facebook.com/share/1EtBzLyYWt/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteConfig.language} dir={siteConfig.dir}>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <YouTubeBanner />
        <Header />
        <main className="flex-1">
          <AdBanner index={0} className="container-main pt-8" />
          {children}
          <AdBanner index={1} className="container-main py-8" />
        </main>
        <Footer />
      </body>
    </html>
  );
}
