// ** Redux Imports
import { combineReducers } from 'redux'

// Reducers Import
import houseReducer from './houseNft'

const rootReducer = combineReducers({
    houseNft: houseReducer
})

export default rootReducer