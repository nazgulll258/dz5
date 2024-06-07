import { productsReducer } from './productsReducer'
import { cartReducer } from './cartReducer'
import { legacy_createStore as createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
})

export const store = createStore(rootReducer)
