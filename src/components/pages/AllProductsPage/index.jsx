import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../../ProductItem';
import s from './style.module.css';

export default function AllProductsPage() {
	const state = useSelector(({ products }) => products);

	return (
		<div className={s.products_container}>
			{state.map((item) => (
				<ProductItem key={item.id} {...item} />
			))}
		</div>
	);
}
