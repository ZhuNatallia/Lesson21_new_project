import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoriesReduser } from './reducer/categoriesReducer';
import thunk from 'redux-thunk';
import { productsReducer } from './reducer/productsReducer';

const rootReducer = combineReducers({
    categories: categoriesReduser,
    products: productsReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunk))