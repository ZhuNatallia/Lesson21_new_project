import React from 'react';
import { useSelector } from 'react-redux';
import BasketCalculation from '../../BasketCalculation';
import BasketItem from '../../BasketItem';
import s from './style.module.css';

export default function BasketPage() {
	const { basket, products } = useSelector((state) => state);
	const data = basket.map((item) => {
		const product = products.find(({ id }) => id === item.id);
		return { ...item, ...product };
	});

	

	return (
		<div>
			{products.length === 0 ? <p>Данные грузятся ...</p>
			: <>
			<div className={s.container}>
				{data.map((item) => (
					<BasketItem key={item.id} {...item} />
				))}
			</div>
			<BasketCalculation/>
			</>}
		</div>
	);
}
