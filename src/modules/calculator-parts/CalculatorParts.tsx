import React from 'react';
import styles from './CalculatorParts.module.scss'

interface ICalculatorParts {
	children?: React.ReactNode
}

const CalculatorParts: React.FC<ICalculatorParts> = ({ children }) => {
	return (
		<div className={styles.calculatorParts}>
			{ children }
		</div>
	);
};

export default CalculatorParts;