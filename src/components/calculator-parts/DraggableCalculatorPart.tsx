import React, {useEffect, useRef} from 'react';
import styles from './Calculator.module.scss'
import CalculatorDisplay from "./calculator-display/CalculatorDisplay";
import CalculatorOperations from "./calculator-operations/CalculatorOperations";
import CalculatorNumbers from "./calculator-numbers/CalculatorNumbers";
import CalculatorEquals from "./calculator-equals/CalculatorEquals";
import {useDrag, useDrop} from "react-dnd";
import {CalculatorPartIds} from "../../app/types";

interface ICalculatorPart {
	partId: "display" | "operations" | "numbers" | "equals"
	index: number
	movePartHandler: any
	addPart?: any
	removePart?: any
	placed?: boolean
}

const DraggableCalculatorPart: React.FC<ICalculatorPart> = (
	{
		partId,
		index,
		movePartHandler,
		addPart,
		removePart,
		placed
	}) => {

	const addPlacedPart = (currentItem: { id: CalculatorPartIds }) => {
		if (addPart) addPart(currentItem.id)
	};

	const ref = useRef<HTMLDivElement>(null);

	const [, drop] = useDrop<ICalculatorPart & {index: number}>({
		accept: "CALCULATOR_PART",
		hover(item, monitor) {
			if (!ref.current) return

			const dragIndex = item.index;
			const hoverIndex = index;

			if (dragIndex === hoverIndex) return

			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			const clientOffset = monitor.getClientOffset();

			const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return

			movePartHandler(dragIndex, hoverIndex);
			item.index = hoverIndex;
		}
	});

	const [{ isDragging }, drag] = useDrag<
		{ id: CalculatorPartIds, index: number },
		{ placed: boolean },
		{ isDragging: boolean }>
	({
		type: "CALCULATOR_PART",
		item: { id: partId, index },
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (dropResult) {
				const { placed } = dropResult;
				addPlacedPart(item)
			}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging()
		})
	});

	drag(drop(ref));

	const onDoubleClick = () => {
		if (removePart)
			removePart(partId)
	}

	return (
		<div ref={ref} className={[
			styles.calculatorPart,
			isDragging ? styles.calculatorPart_dragged : "",
			placed ? styles.calculatorPart_placed : ""

		].join(" ")}
		     onDoubleClick={onDoubleClick}
		>
			{ partId === "display" ? <CalculatorDisplay /> : null }
			{ partId === "operations" ? <CalculatorOperations /> : null }
			{ partId === "numbers" ? <CalculatorNumbers /> : null }
			{ partId === "equals" ? <CalculatorEquals /> : null }
		</div>
	);
};

export default DraggableCalculatorPart;