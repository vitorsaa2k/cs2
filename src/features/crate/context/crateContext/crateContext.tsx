import { ReactNode, createContext, useReducer } from "react";
import { CrateTypes, CrateContextTypes } from "../../types/crateContextTypes";
import { reducer } from "./reducer";

const initialValue: CrateTypes = {
	defaultSkins: [],
	horizontalSkins: [],
	verticalSkins: [[]],
	totalCrates: 1,
	drawnSkins: null,
};
const initialContextValue: CrateContextTypes = {
	state: initialValue,
	dispatch: () => {},
};

const CrateContext = createContext<CrateContextTypes>(initialContextValue);

function CrateContextProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(reducer, initialValue);
	const value = { state, dispatch };

	return (
		<CrateContext.Provider value={value}>{children}</CrateContext.Provider>
	);
}

export { CrateContext, CrateContextProvider };
