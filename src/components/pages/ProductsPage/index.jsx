import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductItem from '../../ProductItem';
import s from './style.module.css';

export default function ProductsPage() {
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
			<div className={s.container}>
				{products.map((item) => (
					<ProductItem key={item.id} {...item} />
				))}
			</div>
		</div>
	);
}
