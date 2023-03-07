import React from 'react';
import styles from '../Calculator.module.scss'
import CalculatorButton from "../../calculator-button/CalculatorButton";

interface ICalculatorOperations {
	onClick?: (key: string) => void
}

const CalculatorOperations: React.FC<ICalculatorOperations> = ({ onClick }) => {
	const onButtonClick = (key: string) => {
		if (onClick)
			onClick(key)
	}

	return (
		<div className={styles.calculatorOperations}>
			<CalculatorButton buttonKey={"/"}
			                  onClick={onButtonClick}
			                  className={onClick ? styles.clickable : ""}
			/>
			<CalculatorButton buttonKey={"X"}
			                  onClick={onButtonClick}
			                  className={onClick ? styles.clickable : ""}
			/>
			<CalculatorButton buttonKey={"-"}
			                  onClick={onButtonClick}
			                  className={onClick ? styles.clickable : ""}
			/>
			<CalculatorButton buttonKey={"+"}
			                  onClick={onButtonClick}
			                  className={onClick ? styles.clickable : ""}
			/>
		</div>
	);
};

export default CalculatorOperations;