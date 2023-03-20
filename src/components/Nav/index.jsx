import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.css';

export default function Nav() {
	const links = [
		{ id: 1, label: 'Category', to: '/' },
		{ id: 2, label: 'All products', to: '/products/all' },
		{ id: 3, label: 'Basket', to: '/basket' },
	];

	const isActive = ({ isActive }) => (isActive ? s.active : '');
	return (
		<nav className={s.nav}>
			{links.map(({ id, label, to }) => (
				<NavLink className={isActive} key={id} to={to}>
					{label}
				</NavLink>
			))}
		</nav>
	);
}
