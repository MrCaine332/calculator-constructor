import React from 'react';
import styles from '../Calculator.module.scss'

interface ICalculatorDisplay {
	value?: string
}

const CalculatorDisplay: React.FC<ICalculatorDisplay> = ({ value = "0" }) => {
	return (
		<div className={[
			styles.calculatorDisplay,
			value.length > 6 ? styles.calculatorDisplay_small : ""
		].join(" ")}>
			{ value }
		</div>
	);
};

export default CalculatorDisplay;