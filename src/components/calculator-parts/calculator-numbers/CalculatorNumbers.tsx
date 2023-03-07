import React from 'react';
import styles from '../Calculator.module.scss'
import CalculatorButton from "../../calculator-button/CalculatorButton";

interface ICalculatorNumbers {
	onClick?: (key: string) => void
}

const CalculatorNumbers: React.FC<ICalculatorNumbers> = ({ onClick }) => {

	return (
		<div className={styles.calculatorNumbers}>
			<CalculatorButton buttonKey={"1"}
			                  onClick={onClick}
			                  className={onClick ? styles.clickable : ""}
			/>
			<CalculatorButton buttonKey={"2"}
			                  onClick={onClick}
			                  className={onClick ? styles.clickable : ""}
			/>
			<CalculatorButton buttonKey={"3"}
			                  onClick={onClick}
			                  className={onClick ? styles.clickable : ""}
			/>
			<CalculatorButton buttonKey={"4"}
			                  onClick={onClick}
			                  className={onClick ? styles.clickable : ""}
			/>
			<CalculatorButton buttonKey={"5"}
			                  onClick={onClick}
			                  className={onClick ? styles.clickable : ""}
			/>
			<CalculatorButton buttonKey={"6"}
			                  onClick={onClick}
			                  className={onClick ? styles.clickable : ""}
			/>
			<CalculatorButton buttonKey={"7"}
			                  onClick={onClick}
			                  className={onClick ? styles.clickable : ""}
			/>
			<CalculatorButton buttonKey={"8"}
			                  onClick={onClick}
			                  className={onClick ? styles.clickable : ""}
			/>
			<CalculatorButton buttonKey={"9"}
			                  onClick={onClick}
			                  className={onClick ? styles.clickable : ""}
			/>
			<CalculatorButton buttonKey={"0"}
			                  onClick={onClick}
			                  className={styles.buttonDouble + " "
				                  + (onClick ? styles.clickable : "") }
			/>
			<CalculatorButton buttonKey={","}
			                  onClick={onClick}
			                  className={onClick ? styles.clickable : ""}
			/>
		</div>
	);
};

export default CalculatorNumbers;