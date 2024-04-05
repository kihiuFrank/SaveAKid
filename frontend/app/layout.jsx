"use client";

import { ConnectKitProvider } from "connectkit";
import { goerli } from "viem/chains";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "tailwindcss/tailwind.css";
import Provider from "../components/ThemeProvider";
import { StateContextProvider } from "../context";
import App from "next/app";
import Web3Modal from "../context/Web3Modal";

// export const metadata = {
//   title: "SaveAKid",
//   description: "A donations platform",
//   viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Web3Modal>
          <StateContextProvider>
            <ConnectKitProvider mode="dark">
              <Provider>
                <Navbar />
                <main> {children}</main>
                <Footer />
              </Provider>
            </ConnectKitProvider>
          </StateContextProvider>
        </Web3Modal>
      </body>
    </html>
  );
}
