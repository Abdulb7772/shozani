import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/lib/i18n/language-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppPopup } from "@/components/ui/whatsapp-popup";
import { CommunityPopup } from "@/components/ui/community-popup";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shozani.com"),
  title: {
    default: "Shozani Global Consultancy | Study, Work & Immigrate Worldwide",
    template: "%s | Shozani Global Consultancy",
  },
  description:
    "Shozani Global Consultancy is your global opportunities platform for study abroad, work abroad, immigration, business setup and language training across Germany, Australia, Canada, USA, UK and more.",
  keywords: [
    "study abroad consultants",
    "study in Germany",
    "immigration consultancy Pakistan",
    "work in Germany",
    "IELTS preparation",
    "visa consultancy",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shozani.com",
    siteName: "Shozani Global Consultancy",
    title: "Shozani Global Consultancy",
    description:
      "Your global opportunities platform for study, work, immigration and business worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shozani Global Consultancy",
    description:
      "Your global opportunities platform for study, work, immigration and business worldwide.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#12294c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
            <WhatsAppPopup />
            <CommunityPopup />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}