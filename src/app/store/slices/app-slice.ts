import {createSlice} from "@reduxjs/toolkit";
import {IAppSlice} from "../../types";
import {calculatorParts} from "../../data/calculatorParts";

const initialState: IAppSlice = {
	parts: calculatorParts
}

const appSlice = createSlice({
	name: "app",
	initialState: initialState,
	reducers: {
		addPart(state, action) {
			const part = state.parts.find(part => part.id === action.payload)
			if (part)
				part.placed = true
		},
		removePart(state, action) {
			const part = state.parts.find(part => part.id === action.payload)
			if (part)
				part.placed = false
		},
		movePart(state, action) {
			if (action.payload.dragIndex === 0 || action.payload.hoverIndex === 0 ) return
			const dragPart = state.parts[action.payload.dragIndex];
			if (dragPart) {
				const prevItem = state.parts.splice(action.payload.hoverIndex, 1, dragPart);
				state.parts.splice(action.payload.dragIndex, 1, prevItem[0]);
			}
		}
	}
})

const { actions, reducer } = appSlice

export const appActions = actions

export default reducer