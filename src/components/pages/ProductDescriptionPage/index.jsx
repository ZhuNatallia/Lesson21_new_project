import React, { useState } from 'react';
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

	const [imgIndex, setImgIndex] = useState(0)

	const render = () => {
		if (product === undefined) {
			return <p>Страницa грузится</p>;
		} else {
			const { id, title, description, images, price, discountPercentage } = product;
			return (
				<div className={s.container}>
					<div className={s.images_container}>
						<img src={images[imgIndex]} alt={title} />
						<div className={s.images_block}>
							{images.map((img, index) => (
								<img
									key={img} src={img} alt={title} className={imgIndex === index ? s.active : ''} onClick={()=> setImgIndex(index)}/>
							))}
						</div>
					</div>
					<div className={s.info}>
						<h1>{title} </h1>
						<p>{description} </p>
						<div className={s.price}>
							<div className={s.price_block}>
								<p> Price:</p>
								<p style={{ textDecoration: 'line-through' }}>{price} </p>
								<p style={{ color: 'red' }}>
									{(price - (price * discountPercentage) / 100).toFixed(2)}
								</p>
							</div>

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
