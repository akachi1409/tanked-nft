import { InjectedConnector } from "@web3-react/injected-connector";
// import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const INFURA_KEY = "c6c245e8924c42bca2e0d7df704afabe";
export const COVALENT_KEY = "ckey_414fa5c3b5eb4756b7aebbbef7a"
export const ALCHEMY_URL = "https://eth-mainnet.g.alchemy.com/v2/AMOJ1FcsPrwRNNTVS8NLknGwn2-maa8G"
export const GOERLI_ALCHEMY_URL = "https://eth-goerli.g.alchemy.com/v2/28v9IABMj7WtEWBqWRJMzu1qipsviW29"

export const RAINBOW_URL = "https://rainbow.me/api/assets?network=ethereum"
export const POLLING_INTERVAL = 12000;
export const PROVIDER = "https://mainnet.infura.io/v3/c6c245e8924c42bca2e0d7df704afabe"
const config = {
   'goerli': {
       CHAIN_NAME: "Goerli Testnet",
       CHAIN_ID: 5,
       CURRENCY: "ETH",
       EXPLORER: "https://goerli.etherscan.io/",
       WEBSOCKET_1: "wss://goerli.infura.io/ws",
       RPC_URL_1: `https://goerli.infura.io/v3/${INFURA_KEY}`,
       RPC_URL_2: `https://goerli.infura.io/v3/${INFURA_KEY}`,
       RPC_URL_3: `https://goerli.infura.io/v3/${INFURA_KEY}`,
   },
   'main': {
    CHAIN_NAME: "Ethereum Mainnet",
    CHAIN_ID: 1,
    CURRENCY: "ETH",
    EXPLORER: "https://etherscan.io/",
    WEBSOCKET_1: "wss://mainnet.infura.io/ws",
    RPC_URL_1: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
    RPC_URL_2: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
    RPC_URL_3: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
    },
    // 'development': {
    //     CHAIN_NAME: "Polygon Testnet",
    //     CHAIN_ID: 80001,
    //     CURRENCY: "MATIC",
    //     EXPLORER: "https://mumbai.polygonscan.com/",
    //     WEBSOCKET_1: "wss://mumbai-dagger.matic.today",
    //     RPC_URL_1: "https://matic-mumbai.chainstacklabs.com",
    //     RPC_URL_2: "https://rpc-mumbai.maticvigil.com",
    //     RPC_URL_3: "https://matic-testnet-archive-rpc.bwarelabs.com",
    // },
    'production': {
        CHAIN_NAME: "Polygon Mainnet",
        CHAIN_ID: 137,
        CURRENCY: "MATIC",
        EXPLORER: "https://polygonscan.com/",
        WEBSOCKET: "wss://rpc-mainnet.matic.network",
        RPC_URL_1: "https://matic-mainnet.chainstacklabs.com",
        RPC_URL_2: "https://rpc-mainnet.maticvigil.com",
        RPC_URL_3: "https://rpc-mainnet.matic.quiknode.pro",
    }
};

export const networkConfig = config['main'];

export const secretKey = "defi-business@Sec!*@#";

export const injected = new InjectedConnector({
    supportedChainIds: [
        1, // Ethereum Mainnet
        3, // Ropesten Testnet 
        4, // Rinkby Testnet 
        5, // Goerli Testnet 
        42, // Kovan Testnet 
        56, // Binance Smart Chain Mainnet 
        97, // Binance Smart Chain Testnet 
        137, // Polygon Mainnet 
        80001, // Polygon Mumbai Testnet 
    ]
});

export const walletconnect = new WalletConnectConnector({
    rpcUrl: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
    bridge: "https://bridge.walletconnect.org",
    qrcodeModal: QRCodeModal,
    qrcode: true
});

export const walletlink = new WalletLinkConnector({
    url: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
    appName: "web3-react-demo"
});

export const connectorsByName = {
    injected: injected,
    walletConnect: walletconnect,
    coinbaseWallet: walletlink
};

export const zeroAddress = "0x0000000000000000000000000000000000000000";