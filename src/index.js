import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { store } from './components/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

/* 1) создать страницу, которая будет отображать товары определенной категории
данная страница отображается при переходе по ссылке /category/:category
добавить ее в роутинг
НЕ ДОБАВЛЯТЬ В NAV */
