import React from 'react';
import s from './style.module.css'
import { Link } from 'react-router-dom';

export default function ProductItem({ id, thumbnail, title }) {
	const link = `/product/${id}`
	return (
		<div className={s.item}>
			<Link to={link}>
				<img src={thumbnail} alt={title} />
				<p>{title} </p>
			</Link>
			<button>Добавить в корзину</button>
		</div>
	);
}
