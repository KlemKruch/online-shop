import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { appReducer, userReducer, productReducer, productsReducer } from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
	app: appReducer,
	user: userReducer,
	product: productReducer,
	products: productsReducer,
});

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
