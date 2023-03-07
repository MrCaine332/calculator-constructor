import React, {useState} from 'react';
import styles from './page.module.scss'
import CalculatorParts from "../../modules/calculator-parts/CalculatorParts";
import CalculatorPreview from "../../modules/calculator-preview/CalculatorPreview";
import DraggableCalculatorPart from "../../components/calculator-parts/DraggableCalculatorPart";
import {CalculatorPartIds, CalculatorPartItem} from "../../app/types";
import {calculatorParts} from "../../app/data/calculatorParts";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {appActions} from "../../app/store/slices/app-slice";

const Constructor = () => {
	const dispatch = useAppDispatch()
	const parts = useAppSelector((state) => state.app.parts)

	const movePartHandler = (dragIndex: number, hoverIndex: number) => {
		dispatch(appActions.movePart({ dragIndex, hoverIndex })) };

	const addPart = (partId: CalculatorPartIds) => {
		dispatch(appActions.addPart(partId)) }

	const removePart = (partId: CalculatorPartIds) => {
		dispatch(appActions.removePart(partId)) }

	return (
		<div className={styles.constructor}>
			<CalculatorParts >
				{ calculatorParts.map((item, index) => (
					<DraggableCalculatorPart key={index}
					                         partId={item.id}
					                         index={parts.findIndex(part => part.id === item.id)}
					                         movePartHandler={movePartHandler}
					                         addPart={addPart}
					                         placed={parts.find(x => x.id === item.id)?.placed}
					/>
				))}
			</CalculatorParts>
			<CalculatorPreview>
				{ parts.filter((item) => item.placed)
						.map((item, index) => (
							<DraggableCalculatorPart key={index}
							                         partId={item.id}
							                         index={parts.findIndex(part => part.id === item.id)}
							                         movePartHandler={movePartHandler}
							                         removePart={removePart}
							/>
						))
				}
			</CalculatorPreview>
		</div>
	);
};

export default Constructor;