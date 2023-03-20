import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductItem from '../../ProductItem';
import s from './style.module.css';

export default function CategoryProductsPage() {
	const { category } = useParams();
	const products = useSelector(({ products }) =>
		products.filter((item) => item.category === category)
	);
	return (
		<div>
			<h2>{category} </h2>
			<div className={s.products_container}>
				{products.map((item) => (
					<ProductItem key={item.id} {...item} />
				))}
			</div>
		</div>
	);
}
// 1) считать все продукты и оставить только те, у которых категория соответствует
// указанной в URL
// 2) пройтись мапом по получившемуся массиву и вывести карточки продуктов
// НЕ ДЕЛАЕМ ДОПОЛНИТЕЛЬНЫХ СЕТЕВЫХ ЗАПРОСОВ

// создать третью страницу ProductsPage и в роутинге использовать ее
// в случае всех товаров и в случае товаров определенной категории
// внутри компонента ProductsPage необходимо обрабатывать оба перехода с разных
// ссылок
