import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { basketClearAction } from '../store/reducer/basketReducer';
import s from './style.module.css';

export default function BasketCalculation() {
	const { basket, products } = useSelector((state) => state);
    const dispatch = useDispatch();
	const totalPrice = basket.reduce((acc, item) => {
		const product = products.find(({ id }) => id === item.id);
		return acc + item.count * product.price;
	}, 0);

	const totalCount = basket.reduce((acc, { count }) => acc + count, 0);
	return (
		<div className={s.container}>
			<p>Общее кол-во:{totalCount} </p>
            <p>Общая стоимость:{totalPrice} </p>
            <button onClick={()=>dispatch(basketClearAction())}>Очистить корзину</button>
		</div>
	);
}
