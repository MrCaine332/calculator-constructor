import React from 'react';
import styles from './CalculatorButton.module.scss'

interface ICalculatorButton {
	buttonKey: string
	className?: string
	onClick?: (key: string) => void
}

const CalculatorButton: React.FC<ICalculatorButton> = (
	{buttonKey, className, onClick}) => {
		const onButtonClick = () => {
			if (onClick)
				onClick(buttonKey)
		}

		return (
			<button className={[styles.calculatorButton, className].join(" ")}
			        onClick={onButtonClick}>
				{buttonKey}
			</button>
		);
	};

export default CalculatorButton;