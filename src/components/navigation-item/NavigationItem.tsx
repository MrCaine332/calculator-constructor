import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './NavigationItem.module.scss'
import Icons, {IconNames} from "../icons/Icons";

interface INavigationItem {
	to: string
	label?: string
	icon?: IconNames
}

const NavigationItem: React.FC<INavigationItem> = ({ to, label, icon }) => {
	return (
		<NavLink to={to} className={({isActive}) => isActive
			? styles.navItem + ' ' + styles.navItem_active
			: styles.navItem }>
			<Icons name={icon} size={20} />
			<p>
				{ label }
			</p>
		</NavLink>
	);
};

export default NavigationItem;