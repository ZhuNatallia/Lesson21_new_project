import React from 'react';
import { useSelector } from 'react-redux';
import CustNavLink from '../CustNavLink';
import s from './style.module.css';

export default function Nav() {
	const basket = useSelector(({basket}) => basket);
	const totalCount = basket.reduce((acc, { count }) => acc + count, 0);

	const links = [
		{ id: 1, label: 'Category', to: '/' },
		{ id: 2, label: 'All products', to: '/products/all' },
		{ id: 3, label: 'Basket', to: '/basket', count: totalCount },
	];

	
	return (
		<nav className={s.nav}>
			{
				links.map(({ id, ...item }) => (
				<CustNavLink key={id} {...item}/>
			))}
		</nav>
	);
}
