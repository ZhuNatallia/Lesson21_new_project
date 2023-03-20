import React from 'react';
import s from './style.module.css'

export default function ProductItem({ thumbnail, title }) {
	return (
		<div className={s.item}>
			<img src={thumbnail} alt={title} />
			<p>{title} </p>
			<button>Добавить в корзину</button>
		</div>
	);
}
