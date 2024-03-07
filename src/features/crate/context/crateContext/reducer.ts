import { generateSkinsArray } from "../../../../utils/crate/generateSkinsArray";
import {
	ActionTypes,
	Actions,
	CrateTypes,
} from "../../types/crateContextTypes";

export function reducer(state: CrateTypes, action: Actions): CrateTypes {
	switch (action.type) {
		case ActionTypes.INCREASE_TOTAL_CRATES:
			return {
				...state,
				totalCrates:
					state.totalCrates < 5 ? state.totalCrates + 1 : state.totalCrates,
			};
		case ActionTypes.DECREASE_TOTAL_CRATES:
			return {
				...state,
				totalCrates:
					state.totalCrates > 1 ? state.totalCrates - 1 : state.totalCrates,
			};
		case ActionTypes.RESET_ALL_SKINS:
			return {
				...state,
				horizontalSkins: generateSkinsArray(state.defaultSkins),
				verticalSkins: [
					generateSkinsArray(state.defaultSkins),
					generateSkinsArray(state.defaultSkins),
					generateSkinsArray(state.defaultSkins),
					generateSkinsArray(state.defaultSkins),
					generateSkinsArray(state.defaultSkins),
				],
			};
		case ActionTypes.UPDATE_HORIZONTAL_SKINS:
			return {
				...state,
				horizontalSkins: action.payload,
			};
		case ActionTypes.UPDATE_VERTICAL_SKINS:
			return {
				...state,
				verticalSkins: action.payload,
			};
		case ActionTypes.UPDATE_DEFAULT_SKINS:
			return {
				...state,
				defaultSkins: action.payload,
			};
		case ActionTypes.OPEN_CRATE:
			return {
				...state,
				drawnSkins: action.payload.skins,
				horizontalSkins: state.horizontalSkins.map((s, i) =>
					i === 70 ? action.payload.skins[0] : s
				),
				verticalSkins: state.verticalSkins.map((a, i) => {
					a[70] = action.payload.skins[i];
					return a;
				}),
			};
		case ActionTypes.UPDATE_DRAWN_SKINS:
			return {
				...state,
				drawnSkins: action.payload,
			};
		default:
			return state;
	}
}
