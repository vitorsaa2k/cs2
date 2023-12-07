import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useEffect,
	useState,
} from "react";
import { SkinCrate } from "../features/dashboard/types";

const defaultValue: DashboardContextType = {
	crateSkins: [
		{
			classid: "",
			exterior: "",
			icon_url: "",
			name: "",
			chance: 0,
			price: 0,
		},
	],
	cratePrice: 0,
	totalPercentage: 0,
	remainingPercentage: 0,
	simulationResults: {
		playerProfit: 0,
		siteProfit: 0,
		totalSpent: 0,
	},
	setCrate: () => {},
	addSkinToCrate: () => {},
	removeSkinFromCrate: () => {},
	updateSkinCrate: () => {},
	setSimulationResults: () => {},
};
type DashboardContextType = {
	crateSkins: SkinCrate[];
	totalPercentage: number;
	remainingPercentage: number;
	cratePrice: number;
	simulationResults: {
		playerProfit: number;
		totalSpent: number;
		siteProfit: number;
	};
	setCrate: (skins: SkinCrate[]) => void;
	addSkinToCrate: (skin: SkinCrate) => void;
	removeSkinFromCrate: (skin: SkinCrate) => void;
	updateSkinCrate: (skin: SkinCrate) => void;
	setSimulationResults: Dispatch<
		SetStateAction<{
			playerProfit: number;
			totalSpent: number;
			siteProfit: number;
		}>
	>;
};

const DashboardContext = createContext<DashboardContextType>(defaultValue);

function DashboardContextProvider({ children }: { children: ReactNode }) {
	const [crateSkins, setCrateSkins] = useState(defaultValue.crateSkins);
	const [simulationResults, setSimulationResults] = useState(
		defaultValue.simulationResults
	);

	function setCrate(skins: SkinCrate[]) {
		localStorage.setItem("crate", JSON.stringify(skins));
		setCrateSkins(skins);
	}

	const totalPercentage = crateSkins
		.map(skin => skin.chance)
		.reduce((prevValue, currentValue) => prevValue + currentValue, 0);

	const remainingPercentage = 100 - totalPercentage;

	let cratePrice = crateSkins
		.map(skin => skin.price * (skin.chance / 100))
		.reduce((prevValue, currValue) => prevValue + currValue, 0);
	cratePrice += cratePrice * 0.1;

	function updateSkinCrate(skinReceived: SkinCrate) {
		setCrateSkins(prevState => {
			return prevState.map(skin =>
				skin.name === skinReceived.name ? skinReceived : skin
			);
		});
	}

	function addSkinToCrate(skin: SkinCrate) {
		if (crateSkins[0]?.icon_url.length === 0) {
			setCrateSkins([{ ...skin, chance: 0 }]);
		} else {
			setCrateSkins(
				[
					...crateSkins,
					{
						...skin,
						chance: 0,
					},
				].sort((a, b) => a.price - b.price)
			);
		}
	}

	function removeSkinFromCrate(skinToRemove: SkinCrate) {
		setCrateSkins(prevState =>
			prevState.filter(skin => skin.name != skinToRemove.name)
		);
	}

	useEffect(() => {
		const localCrate = localStorage.getItem("crate");
		if (localCrate) {
			setCrate(JSON.parse(localCrate));
		}
	}, []);
	return (
		<DashboardContext.Provider
			value={{
				totalPercentage,
				remainingPercentage,
				crateSkins,
				cratePrice,
				simulationResults,
				setCrate,
				addSkinToCrate,
				removeSkinFromCrate,
				updateSkinCrate,
				setSimulationResults,
			}}
		>
			{children}
		</DashboardContext.Provider>
	);
}

export { DashboardContext, DashboardContextProvider };
