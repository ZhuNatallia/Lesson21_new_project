import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { basketAddAction } from '../../store/reducer/basketReducer';
import s from './style.module.css';

export default function ProductDescriptionPage() {
	const { id } = useParams();
	/* const products = useSelector((state) => state.products) */
	const product = useSelector(({ products }) =>
		products.find((item) => item.id === +id)
	);
	const dispatch = useDispatch();
	/* const newElem = products.find((item) => item.id === +id); */

	const render = () => {
		if (product === undefined) {
			return <p>Страницa грузится</p>;
		} else {
			const { id, title, description, thumbnail, price } = product;
			return (
				<div className={s.container}>
					<img src={thumbnail} alt={title} />
					<div className={s.info}>
						<h1>{title} </h1>
						<p>{description} </p>
						<div className={s.price}>
							<p> Price: {price}</p>
							<button onClick={() => dispatch(basketAddAction(id))}>
								Добавить в корзину
							</button>
						</div>
					</div>
				</div>
			);
		}
	};
	return render();
}
