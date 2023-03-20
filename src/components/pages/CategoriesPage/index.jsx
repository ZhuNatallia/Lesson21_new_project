import React from 'react';
import { useSelector } from 'react-redux';
import CategoryItem from '../../CategoryItem';
import s from './style.module.css';

export default function CategoriesPage() {
	const categories = useSelector((state) => state.categories);
	return (
		<div className={s.page}>
			<h1>Лучший магазин лучших вещей</h1>
			<div className={s.container}>
				{categories.map((item) => (
					<CategoryItem key={item} label={item} />
				))}
			</div>
		</div>
	);
}
/* используя асинхронные action загрузить из API массив с категориями и отобразить его */

// доработать CategoryItem и обернуть его в Link 
// при нажатии на Link должен быть переход на страницу с продуктами 
// соответствующей категории
