import React from 'react';
import s from 'style.module.css'

export default function BasketItem({ id, thumbnail, title, price, count }) {
	return (
		<div className={s.item}>
			<img src={thumbnail} alt={title} />
			<p>{title} </p>
			<p>
				{price} X {count} = {price * count}{' '}
			</p>
			<div className={s.btns}>
				<button>+</button>
				<button>-</button>
			</div>
		</div>
	);
}
