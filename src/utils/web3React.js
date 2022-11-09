import { getDefaultProvider, Web3Provider } from "@ethersproject/providers";
import { networkConfig, POLLING_INTERVAL } from "mainConfig";
import simpleRpcProvider from "./simpleRpcProvider";

export const getLibrary = (provider) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};

export const setupNetwork = async () => {
  const provider = window.ethereum;
  const chainId = networkConfig.CHAIN_ID;
  if (provider) {
    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      });
      return true;
    } catch (switchError) {
      if (switchError?.code === 4902) {
        try {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: `0x${chainId.toString(16)}`,
                chainName: networkConfig.CHAIN_NAME,
                nativeCurrency: {
                  name: "ETH",
                  symbol: "eth",
                  decimals: 18,
                },
                rpcUrls: nodes,
                blockExplorerUrls: [`${networkConfig.EXPLORER}/`],
              },
            ],
          });
          setCookie("network", true, { path: "/" });
          return true;
        } catch (error) {
          console.error("Failed to setup the network in Metamask:", error);
          return false;
        }
      }
      return false;
    }
  } else {
    console.error(
      `Can't setup the ${networkConfig.CHAIN_NAME} network on metamask because window.ethereum is undefined`
    );
    return false;
  }
};
