import React from 'react';
import styles from './Navigation.module.scss'
import NavigationItem from "../../components/navigation-item/NavigationItem";

const Navigation = () => {
	return (
		<div className={styles.navigationWrap}>
			<nav className={styles.nav}>
				<NavigationItem to={"runtime"} label={"Runtime"} icon={"eye"} />
				<NavigationItem to={"constructor"} label={"Constructor"} icon={"brackets"} />
			</nav>
		</div>
	);
};

export default Navigation;