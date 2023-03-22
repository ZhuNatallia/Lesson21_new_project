import './index.css';
import {  Route, Routes } from 'react-router-dom';
import CategoriesPage from '../pages/CategoriesPage';
import BasketPage from '../pages/BasketPage';
import NotFoundPage from '../pages/NotFoundPage';
import Nav from '../Nav';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { asyncloadCategoriesAction } from '../store/asyncAction/categories';
import { asyncloadProductsAction } from '../store/asyncAction/products';
import ProductsPage from '../pages/ProductsPage';
import ProductDescriptionPage from '../pages/ProductDescriptionPage';



function App() {
		const dispatch = useDispatch();

	useEffect(() => {
		dispatch(asyncloadCategoriesAction);
		dispatch(asyncloadProductsAction)
	},[])
	return (
		<div>
			<Nav />
			<Routes>
				<Route path='/' element={<CategoriesPage />} />
				<Route path='/category/:category' element={<ProductsPage />} />
				<Route path='products/all' element={<ProductsPage />} />
				<Route path='product/:id' element={<ProductDescriptionPage/>} />
				<Route path='/basket' element={<BasketPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</div>
	);
}

export default App;
/* 1) создать страницы 
- CategoriesPage
- BasketPage
- AllProductsPage
- NotFoundPage
подключить к роутингк */

//['electronics', 'jewelery', "men's clothing", "women's clothing"];

/* подключить redux и отобразить просто списком названия категорий на странице CategoriesPage
массив с категориями задать как defaultState */

/* используя асинхронные action загрузить из API массив с товарами и отобразить его
необходимо вывести только наименования товаров в отдельных параграфах
на странице AllProductsPage 
https://fakestoreapi.com/products

*/
