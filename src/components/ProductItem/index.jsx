import React from 'react';
import s from './style.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { basketAddAction } from '../store/reducer/basketReducer';

export default function ProductItem({ id, thumbnail, title, price }) {
	const link = `/product/${id}`;
	const dispatch = useDispatch();
	return (
		<div className={s.item}>
			<Link to={link}>
				<img src={thumbnail} alt={title} />
				<p>{title} </p>
				{/* <p>{price} </p> */}
			</Link>
			<button onClick={() => dispatch(basketAddAction(id))}>
				Добавить в корзину
			</button>
		</div>
	);
}
