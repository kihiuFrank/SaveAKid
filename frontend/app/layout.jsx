"use client";
import { WagmiConfig, createConfig, sepolia } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { goerli } from "viem/chains";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "tailwindcss/tailwind.css";
import Provider from "../components/ThemeProvider";

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_API_KEY, // or infuraId
    walletConnectProjectId: process.env.WALLET_CONNECT_PROJECT_ID,

    // Required
    appName: "You Create Web3 Dapp",

    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's logo,no bigger than 1024x1024px (max. 1MB)

    // ChainDoesNotSupportContract: Chain "Sepolia" does not support contract "ensUniversalResolver".
    // This could be due to any of the following:
    // - The chain does not have the contract "ensUniversalResolver" configured.
    chains: [sepolia],
    // chains: [goerli],
  })
);

// export const metadata = {
//   title: "SaveAKid",
//   description: "A donations platform",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <WagmiConfig config={config}>
        <ConnectKitProvider mode="dark">
          <body>
            <Provider>
              <Navbar />
              <main> {children}</main>
              <Footer />
            </Provider>
          </body>
        </ConnectKitProvider>
      </WagmiConfig>
    </html>
  );
}
