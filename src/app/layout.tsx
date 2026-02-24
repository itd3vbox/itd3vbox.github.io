import type { Metadata } from "next";
import StoreProvider from "./StoreProvider";
import PageAnimation from "./page-animation";
import PageTop from "./page-top";
import PageMain from "./page-main";
import PageEnd from "./page-end";

// import { Inter } from "next/font/google";
import "./sass/main.sass";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ITD3VBox — Infinite Tinkering · 3 Dimensions · Virtual Box",
  description: "Build the impossible, dream like a child, invent like an engineer. ITD3VBox is a creative tech lab powered by imagination and AI.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "ITD3VBox — Build the Impossible",
    description: "A creative technology lab blending AI, imagination, and development.",
    images: ["/pattern.png"],
    type: "website",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          {/* <PageAnimation /> */}
          <PageTop />
          <PageMain>{ children }</PageMain>
          <PageEnd />
        </body>
      </html>
    </StoreProvider>
  );
}
