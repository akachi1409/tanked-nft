// Import Constants
import {
    ALLHOUSENFTS,
    ALLMYNFTS
} from '../../constants'

export const setAllHouseNFTs = () => {
    return dispatch => {
        return dispatch({
            type: ALLHOUSENFTS,
            data: ['all house data here']
        })
    }
}

export const setAllMyNFTs = (nfts) => {
    return dispatch => {
        return dispatch({
            type: ALLMYNFTS,
            data: nfts
        })
    }
}