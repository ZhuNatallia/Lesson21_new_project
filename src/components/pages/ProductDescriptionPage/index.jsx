import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import s from './style.module.css'

export default function ProductDescriptionPage() {
    const { id } = useParams();
    /* const products = useSelector((state) => state.products) */
	const product = useSelector(({ products }) =>
		products.find((item) => item.id === +id)
	);
    /* const newElem = products.find((item) => item.id === +id); */

    const render = () => {
        if (product === undefined) {
            return <p>Страницa грузится</p>
        } else {
            const { title, description, thumbnail, price } = product;
            return (
                <div className={s.container}>
                    <img src={thumbnail} alt={title} />
                    <div className={s.info}> 
                        <h1>{title} </h1>
                        <p>{description} </p>
                        <div className={s.price}>
                            <p> Price: {price}</p>
                            <button>Добавить в корзину</button>
                        </div>
                    </div>
                </div>

            )
        }
    }
    return render();
}
