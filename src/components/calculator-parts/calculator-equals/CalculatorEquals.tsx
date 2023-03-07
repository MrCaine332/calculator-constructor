import React from 'react';
import styles from '../Calculator.module.scss'
import CalculatorButton from "../../calculator-button/CalculatorButton";

interface ICalculatorEquals {
	onClick?: (key: string) => void
}


const CalculatorEquals: React.FC<ICalculatorEquals> = ({ onClick }) => {
	return (
		<div className={styles.calculatorEquals}>
			<CalculatorButton buttonKey={"="}
			                  onClick={onClick}
			                  className={styles.calculatorEqualsButton + " "
				                  + (onClick ? styles.clickable : "")} />
		</div>
	);
};

export default CalculatorEquals;