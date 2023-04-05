import React from 'react';
import { useDispatch } from 'react-redux';
import { productsSearchFilterAction, productsSortFilterAction } from '../store/reducer/productsReducer';
import s from './style.module.css';

export default function ProductsFilterBar() {
	const dispatch = useDispatch();
	const searchOnChange = (event) => {
		dispatch(productsSearchFilterAction(event.target.value));
	};
	const sortOnChange = (event) => {
		dispatch(productsSortFilterAction(+event.target.value));
		console.log(event.target.value);
	}
	return (
		<div className={s.container}>
			<input type='text' placeholder='поиск...' onChange={searchOnChange} />
			<select onChange={sortOnChange}>
				<option value='1'>цена вверх</option>
				<option value='2'>цена вниз</option>
			</select>
		</div>
	);
}
