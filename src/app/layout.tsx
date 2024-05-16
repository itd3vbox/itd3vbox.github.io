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
  title: "Create Next App",
  description: "Generated by create next app",
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
          <PageAnimation />
          <PageTop />
          <PageMain>{ children }</PageMain>
          <PageEnd />
        </body>
      </html>
    </StoreProvider>
  );
}
