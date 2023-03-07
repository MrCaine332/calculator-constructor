import React from 'react';
import styles from './page.module.scss'
import {useAppSelector} from "../../app/hooks";
import CalculatorDisplay from "../../components/calculator-parts/calculator-display/CalculatorDisplay";
import CalculatorOperations from "../../components/calculator-parts/calculator-operations/CalculatorOperations";
import CalculatorNumbers from "../../components/calculator-parts/calculator-numbers/CalculatorNumbers";
import CalculatorEquals from "../../components/calculator-parts/calculator-equals/CalculatorEquals";
import {useCalculator} from "../../app/hooks/useCalculator";

const Runtime = () => {
	const parts = useAppSelector(state => state.app.parts)

	const { displayedValue, onEquals, onOperationClick, onNumberClick } = useCalculator()

	return (
		<div className={styles.runtime}>
			{ parts
				.filter(part => part.placed)
				.map((part, index) => (
				<div key={index} className={styles.calculatorPart}>
					{ part.id === "display"
						? <CalculatorDisplay value={displayedValue} /> : null }
					{ part.id === "operations"
						? <CalculatorOperations onClick={onOperationClick} /> : null }
					{ part.id === "numbers"
						? <CalculatorNumbers onClick={onNumberClick} /> : null }
					{ part.id === "equals"
						? <CalculatorEquals onClick={onEquals} /> : null }
				</div>
			))}
		</div>
	);
};

export default Runtime;