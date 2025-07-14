import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { OnlineStore } from './App.jsx';
import { store } from './store.js';
import './index.css';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<OnlineStore />
		</Provider>
	</BrowserRouter>,
);
