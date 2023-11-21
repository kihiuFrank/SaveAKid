import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { WagmiConfig, createConfig, sepolia } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_API_KEY, // or infuraId
    walletConnectProjectId: process.env.WALLET_CONNECT_PROJECT_ID,

    // Required
    appName: "SaveAKid",

    // Optional
    appDescription: "A donation platform for children.",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's logo,no bigger than 1024x1024px (max. 1MB)

    // ChainDoesNotSupportContract: Chain "Sepolia" does not support contract "ensUniversalResolver".
    // This could be due to any of the following:
    // - The chain does not have the contract "ensUniversalResolver" configured.
    chains: [sepolia],
    // chains: [goerli],
  })
);

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider mode="dark">
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
