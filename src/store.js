import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { CategoriesReducer, ProductsReducer } from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
	products: ProductsReducer,
	categories: CategoriesReducer,
});

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
