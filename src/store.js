import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import {
	appReducer,
	userReducer,
	usersReducer,
	productReducer,
	productsReducer,
	categoriesReducer,
	sessionReducer,
	basketReducer,
} from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
	app: appReducer,
	user: userReducer,
	users: usersReducer,
	product: productReducer,
	products: productsReducer,
	categories: categoriesReducer,
	basket: basketReducer,
	session: sessionReducer,
});

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
