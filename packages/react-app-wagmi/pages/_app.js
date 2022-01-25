import "../styles/globals.css";
import { Provider, Connector } from "wagmi";
import { Celo, Alfajores, Localhost } from '../utils/constants.ts'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const connectors = [
  new InjectedConnector({ chains: [Celo, Alfajores, Localhost] }),
  new WalletConnectConnector({
    chains: [Celo, Alfajores, Localhost],
    options: {
      qrcode: true,
      rpc: {
        44787: "https://alfajores-forno.celo-testnet.org",
        42220: "https://forno.celo.org",
      }
    },
  }),
]

function MyApp({ Component, pageProps }) {
  return (
    <Provider autoConnect connectors={connectors}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
