import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductItem from '../../ProductItem';
import ProductsFilterBar from '../../ProductsFilterBar';
import { productsResetFilter } from '../../store/reducer/productsReducer';
import s from './style.module.css';

export default function ProductsPage() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(productsResetFilter())
	}, [])


	const { category } = useParams();

	const products = useSelector(({ products }) => {
		if (category === undefined) {
			return products;
		}
		return products.filter((item) => item.category === category);
	});
	return (
		<div>
			<h2>{category ? category : 'all products'} </h2>
			<ProductsFilterBar/>
			<div className={s.container}>
				{products
					.filter(({show}) => show)
					.map((item) => (
					<ProductItem key={item.id} {...item} />
				))}
			</div>
		</div>
	);
}
