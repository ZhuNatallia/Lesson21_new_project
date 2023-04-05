import React from 'react';
import s from './style.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { basketAddAction } from '../store/reducer/basketReducer';

export default function ProductItem({ id, thumbnail, title, price, discountPercentage }) {
	const link = `/product/${id}`;
	const dispatch = useDispatch();
	return (
		<div className={s.item}>
			<Link to={link}>
				<img src={thumbnail} alt={title} />
				<p>{title} </p>
				<div className={s.price_block}>
					<p style={{textDecoration: 'line-through'}}>{price} </p>
					<p style={{color: 'red'}}>{(price - price*discountPercentage/100).toFixed(2)}</p>
				</div>
			</Link>
			<button onClick={() => dispatch(basketAddAction(id))}>
				Добавить в корзину
			</button>
		</div>
	);
}
