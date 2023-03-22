import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoriesReduser } from './reducer/categoriesReducer';
import thunk from 'redux-thunk';
import { productsReducer } from './reducer/productsReducer';
import { basketReducer } from './reducer/basketReducer';

const rootReducer = combineReducers({
    categories: categoriesReduser,
    products: productsReducer,
    basket: basketReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunk))