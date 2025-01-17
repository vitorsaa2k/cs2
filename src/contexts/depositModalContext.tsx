import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
} from "react";

const defaultValue: DespositModalContextType = {
	showDepositModal: false,
	setShowDepositModal: () => {},
};
type DespositModalContextType = {
	showDepositModal: boolean;
	setShowDepositModal: Dispatch<SetStateAction<boolean>>;
};

const DepositModalContext =
	createContext<DespositModalContextType>(defaultValue);

function DepositModalProvider({ children }: { children: ReactNode }) {
	const [showDepositModal, setShowDepositModal] = useState(
		defaultValue.showDepositModal
	);
	return (
		<DepositModalContext.Provider
			value={{
				showDepositModal,
				setShowDepositModal,
			}}
		>
			{children}
		</DepositModalContext.Provider>
	);
}

export { DepositModalContext, DepositModalProvider };
