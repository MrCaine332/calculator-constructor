export type CalculatorPartIds = "display" | "operations" | "numbers" | "equals"

export type CalculatorPartItem = {
	id: CalculatorPartIds
	placed: boolean
}

export interface IAppSlice {
	parts: CalculatorPartItem[]
}