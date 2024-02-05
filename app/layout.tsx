/* eslint-disable @next/next/no-head-element */

import "@rainbow-me/rainbowkit/styles.css";
import { Metadata } from "next";
import "../styles/globals.css";
import "../styles/tailwind.css";
import Navbar from "@/app/navbar";
import { Web3Provider } from "@/components/web3-provider";

export const metadata: Metadata = {
  // metadataBase: new URL(""),
  title: "",
  description: "",
  openGraph: {
    type: "website",
    title: "",
    description: "",
    images: [
      {
        url: "https://res.cloudinary.com/honeyjar/image/upload/v1677023883/THJ_WebBanner.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <Web3Provider>
          <div className="mx-auto">
            <Navbar />
            {children}
          </div>
        </Web3Provider>
      </body>
    </html>
  );
}
