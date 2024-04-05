"use client";

// import { WagmiConfig, createConfig, sepolia } from "wagmi";
// import { ConnectKitProvider, getDefaultConfig } from "connectkit";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { sepolia, mainnet } from "viem/chains";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.WALLET_CONNECT_PROJECT_ID;

// 2. Create wagmiConfig
const metadata = {
  name: "SaveAKid",
  description: "A donations platform for kids.",
  url: "https://saveakid.online",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, sepolia];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

// const config = createConfig(
//   getDefaultConfig({
//     // Required API Keys
//     alchemyId: process.env.ALCHEMY_API_KEY, // or infuraId
//     walletConnectProjectId: process.env.WALLET_CONNECT_PROJECT_ID,

//     // Required
//     appName: "You Create Web3 Dapp",

//     // Optional
//     appDescription: "A donations platform for kids.",
//     appUrl: "https://saveakid.online", // your app's url
//     appIcon: "https://family.co/logo.png", // your app's logo,no bigger than 1024x1024px (max. 1MB)

//     // ChainDoesNotSupportContract: Chain "Sepolia" does not support contract "ensUniversalResolver".
//     // This could be due to any of the following:
//     // - The chain does not have the contract "ensUniversalResolver" configured.
//     chains: [sepolia],
//     // chains: [goerli],
//   })
// );

export default function Web3Modal({ children }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
