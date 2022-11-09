// Import Constants
import {
    ALLHOUSENFTS,
    ALLMYNFTS,
    HOME_CONNECT_WALLET_BEGIN,
    HOME_CONNECT_WALLET_SUCCESS,
    HOME_NETWORK_CHANGED,
    HOME_ACCOUNTS_CHANGED,
    HOME_CONNECT_WALLET_FAILURE,
    HOME_DISCONNECT_WALLET_BEGIN,
    HOME_DISCONNECT_WALLET_SUCCESS,
    HOME_DISCONNECT_WALLET_FAILURE,
} from '../../constants'

// Initial States
const initialState = {
    allMyNFTs: [],
    allNFTs: [],
}

const houseReducer = (state = initialState, action) => {
    switch (action.type) {

        case ALLHOUSENFTS:
            return { ...state, allNFTs: action.data }

        case ALLMYNFTS:
            return { ...state, allMyNFTs: action.data }

        case HOME_CONNECT_WALLET_BEGIN:
            return {
                ...state,
                connectWalletPending: true
            };

        case HOME_CONNECT_WALLET_SUCCESS:
            return {
                ...state,
                web3: action.data.web3,
                address: action.data.address,
                networkId: action.data.networkId,
                connected: true,
                connectWalletPending: false
            };

        case HOME_NETWORK_CHANGED:
            return {
                ...state,
                networkId: action.data
            };

        case HOME_ACCOUNTS_CHANGED:
            return {
                ...state,
                address: action.data
            };

        case HOME_CONNECT_WALLET_FAILURE:
            return {
                ...state,
                connectWalletPending: false
            };

        case HOME_DISCONNECT_WALLET_BEGIN:
            return {
                ...state,
                disconnectWalletPending: true
            };

        case HOME_DISCONNECT_WALLET_SUCCESS:
            return {
                ...state,
                address: "",
                web3: null,
                connected: false,
                disconnectWalletPending: false
            };

        case HOME_DISCONNECT_WALLET_FAILURE:
            return {
                ...state,
                web3: null,
                address: "",
                disconnectWalletPending: false
            };

        default:
            return state
    }
}

export default houseReducer