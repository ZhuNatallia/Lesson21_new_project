import React from 'react';
import { useDispatch } from 'react-redux';
import { basketDecrementAction, basketIncrementAction, basketRemovetAction } from '../store/reducer/basketReducer';
import s from './style.module.css'

export default function BasketItem({ id, thumbnail, title, price, count }) {
	const dispatch = useDispatch();
	return (
		<div className={s.item}>
			<img src={thumbnail} alt={title} />
			<p>{title} </p>
			<p>
				{price} X {count} = {price * count}{' '}
			</p>
			<div className={s.btns}>
				<button onClick={()=>dispatch(basketIncrementAction(id))}>+</button>
				<button onClick={()=>dispatch(basketDecrementAction(id))}>-</button>
				<button onClick={()=>dispatch(basketRemovetAction(id))}>X</button>
			</div>
		</div>
	);
}
