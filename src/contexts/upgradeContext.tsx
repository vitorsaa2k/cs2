import { ReactNode, createContext, useReducer } from "react";
import { DrawnSkin, SkinType } from "../features/crate/types/api";
import {
	Actions,
	ActionTypes,
	UpgradeContextType,
	UpgradeType,
} from "../features/upgrade/contextTypes";

function reducer(
	state: UpgradeType = initialValue,
	action: Actions
): UpgradeType {
	const maxSkinsToUpgrade = 20;
	switch (action.type) {
		case ActionTypes.ADD_USER_SKIN:
			return {
				...state,
				userSkins:
					state.userSkins.length !== maxSkinsToUpgrade
						? [...state.userSkins, action.payload as DrawnSkin]
						: state.userSkins,
			};
		case ActionTypes.REMOVE_USER_SKIN:
			return {
				...state,
				userSkins: state.userSkins.filter(
					skin => skin.rollId !== action.payload.rollId
				),
			};
		case ActionTypes.ADD_UPGRADE_SKIN:
			return {
				...state,
				skinsUpgrade:
					state.skinsUpgrade.length !== maxSkinsToUpgrade
						? [...state.skinsUpgrade, action.payload as SkinType]
						: state.skinsUpgrade,
			};
		case ActionTypes.REMOVE_UPGRADE_SKIN:
			return {
				...state,
				skinsUpgrade: state.skinsUpgrade.filter(
					skin => skin.name !== action.payload.name
				),
			};
		case ActionTypes.UPDATE_AVALIABLE_SKINS:
			return {
				...state,
				avaliableSkins: {
					skins: action.payload,
					isFetching: state.avaliableSkins.isFetching,
				},
			};
		case ActionTypes.UPDATE_USER_INVENTORY:
			return {
				...state,
				userInventory: action.payload as DrawnSkin[],
			};
		case ActionTypes.UPDATE_SUCCESS_CHANCE:
			return {
				...state,
				successChance: action.payload,
			};
		case ActionTypes.RESET_UPGRADER:
			return {
				...state,
				hasWon: null,
				successChance: 0,
				userSkins: [],
				skinsUpgrade: [],
			};
		case ActionTypes.UPDATE_MULTIPLIER:
			return {
				...state,
				multiplier: action.payload,
			};
		case ActionTypes.UPDATE_RESULT:
			return {
				...state,
				hasWon: action.payload,
			};
		case ActionTypes.UPDATE_AVALIABLE_FETCH:
			return {
				...state,
				avaliableSkins: {
					skins: state.avaliableSkins.skins,
					isFetching: action.payload,
				},
			};
		default:
			return state;
	}
}

const initialValue: UpgradeType = {
	userSkins: [],
	userInventory: [],
	avaliableSkins: { skins: [], isFetching: false },
	skinsUpgrade: [],
	successChance: 0,
	multiplier: 1.5,
	hasWon: null,
};
const initialContextValue: UpgradeContextType = {
	state: initialValue,
	dispatch: () => {},
};

const UpgradeContext = createContext<UpgradeContextType>(initialContextValue);

function UpgradeContextProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(reducer, initialValue);
	const value = { state, dispatch };

	return (
		<UpgradeContext.Provider value={value}>{children}</UpgradeContext.Provider>
	);
}

export { UpgradeContext, UpgradeContextProvider };
