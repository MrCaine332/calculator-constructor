import {useState} from "react";

const returnMathResult = (first: number, second: number, operation: string) => {
	switch (operation) {
		case "+":
			return first + second
			break
		case "-":
			return first - second
			break
		case "X":
			return first * second
			break
		case "/":
			return first / second
			break
		default: return false
	}
}

export const useCalculator = () => {
	const [displayedValue, setDisplayedValue] = useState<string>("")
	const [currentValue, setCurrentValue] = useState<number>(0)
	const [savedValue, setSavedValue] = useState<number>(0)
	const [operation, setOperation] = useState<string | null>(null)

	const onOperationClick = (key: string) => {
		if (!operation || operation === "=") {
			setOperation(key)
			setSavedValue(currentValue)
			setCurrentValue(0)
			setDisplayedValue("")
		}
		if (operation && operation !== "=") {
			const result = returnMathResult(savedValue, currentValue, operation)
			if (!result || result === Infinity) {
				setDisplayedValue("Не определено")
				setOperation("=")
				setCurrentValue(0)
				setSavedValue(0)
			} else {
				setSavedValue(result)
				setCurrentValue(0)
				setOperation(key)
				setDisplayedValue("")
			}
		}
	}

	const onNumberClick = (key: string) => {
		if (operation === "=") {
			setOperation(null)

			setDisplayedValue(key)
			setSavedValue(0)
			setCurrentValue(parseFloat(key))
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
				setDisplayedValue("Не определено")
			} else {
				setDisplayedValue(result.toString().replace('.', ','))
				setCurrentValue(result)
			}
		}
		setOperation(key)
	}

	return { displayedValue, onNumberClick, onOperationClick, onEquals }
}