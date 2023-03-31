import {useState} from "react";

const returnMathResult = (first: number, second: number, operation: string) => {
	switch (operation) {
		case "+":
			return first + second
		case "-":
			return first - second
		case "X":
			return first * second
		case "/":
			return first / second
		default: return false
	}
}

export const useCalculator = () => {
	const [displayedValue, setDisplayedValue] = useState<string>("")
	const [currentValue, setCurrentValue] = useState<number>(0)
	const [savedValue, setSavedValue] = useState<number>(0)
	const [operation, setOperation] = useState<string | null>(null)

	const setStates = (operation: string | null,
	                   savedValue: number,
	                   currentValue: number,
	                   displayedValue: string) => {
		setOperation(operation)
		setSavedValue(savedValue)
		setCurrentValue(currentValue)
		setDisplayedValue(displayedValue)
	}

	const onOperationClick = (key: string) => {
		if (!operation || operation === "=") {
			setStates(key, currentValue, 0, "")
		}
		if (operation && operation !== "=") {
			const result = returnMathResult(savedValue, currentValue, operation)
			if (!result || result === Infinity) {
				setStates("=", 0, 0, "Not calculated")
			} else {
				const fixedResult = Number((result).toFixed(15));
				setStates(key, fixedResult, 0, "")
			}
		}
	}

	const onNumberClick = (key: string) => {
		if (operation === "=") {
			setStates(null, 0, parseFloat(key), key)
		} else {
			const nextDisplayedValue = displayedValue + key
			setDisplayedValue(prevState => prevState + key)

			const str = nextDisplayedValue.replace(',', '.')
			setCurrentValue(parseFloat(str))
		}
	}

	const onEquals = (key: string) => {
		if (operation === key) return
		if (operation) {
			const result = returnMathResult(savedValue, currentValue, operation)
			if (!result || result === Infinity) {
				setDisplayedValue("Not calculated")
			} else {
				const fixedResult = Number((result).toFixed(15));
				setDisplayedValue(fixedResult.toString().replace('.', ','))
				setCurrentValue(result)
			}
		}
		setOperation(key)
	}

	return { displayedValue, onNumberClick, onOperationClick, onEquals }
}