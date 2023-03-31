import React from 'react';
import styles from './CalculatorPreview.module.scss'
import {useDrop} from "react-dnd";
import Icons from "../../components/icons/Icons";

interface ICalculatorPreview {
	children: React.ReactNode
}

const CalculatorPreview: React.FC<ICalculatorPreview> = ({ children }) => {
	const [{ isOver, canDrop }, drop] = useDrop<{placed:boolean},
		{},{ isOver:boolean, canDrop: boolean }>({
		accept: "CALCULATOR_PART",
		drop: () => ({ placed: true }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		}),
	});

	console.log(React.Children.count(children))

	return (
		<>
			<div ref={drop}
			     className={[
					 styles.calculatorPreview,
					 (isOver && canDrop && React.Children.count(children) === 0)
						 ? styles.calculatorPreview_canDrop
						 : ""
			     ].join(" ")}
			>
				{ React.Children.count(children) === 0
					? <div className={styles.placeholder}>
						<Icons name={"add"} size={20} />
						<p className={styles.textTop}>Drag any element</p>
						<p className={styles.textBottom}>from left panel</p>
					</div>
					: null }
				{children}
			</div>
		</>
	);
};

export default CalculatorPreview;