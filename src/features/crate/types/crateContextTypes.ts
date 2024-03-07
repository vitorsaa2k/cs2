import { Dispatch } from "react";
import { CrateSkin, DrawnSkin } from "./api";

export enum ActionTypes {
	OPEN_CRATE = "OPEN_CRATE",
	INCREASE_TOTAL_CRATES = "INCREASE_TOTAL_CRATES",
	DECREASE_TOTAL_CRATES = "DECREASE_TOTAL_CRATES",
	RESET_ALL_SKINS = "RESET_ALL_SKINS",
	UPDATE_HORIZONTAL_SKINS = "UPDATE_HORIZONTAL_SKINS",
	UPDATE_VERTICAL_SKINS = "UPDATE_VERTICAL_SKINS",
	UPDATE_DEFAULT_SKINS = "UPDATE_DEFAULT_SKINS",
	UPDATE_DRAWN_SKINS = "UPDATE_DRAWN_SKINS",
}

interface OpenCrateAction {
	type: ActionTypes.OPEN_CRATE;
	payload: { crateId: string; skins: DrawnSkin[] };
}
interface IncreaseTotalCratesAction {
	type: ActionTypes.INCREASE_TOTAL_CRATES;
}
interface DecreaseTotalCratesAction {
	type: ActionTypes.DECREASE_TOTAL_CRATES;
}
interface ResetAllSkinsAction {
	type: ActionTypes.RESET_ALL_SKINS;
}
interface UpdateHorizontalSkinsAction {
	type: ActionTypes.UPDATE_HORIZONTAL_SKINS;
	payload: CrateSkin[];
}
interface UpdateVerticalSkinsAction {
	type: ActionTypes.UPDATE_VERTICAL_SKINS;
	payload: CrateSkin[][];
}
interface UpdateDefaultSkinsAction {
	type: ActionTypes.UPDATE_DEFAULT_SKINS;
	payload: CrateSkin[];
}
interface UpdateDrawnSkinsAction {
	type: ActionTypes.UPDATE_DRAWN_SKINS;
	payload: DrawnSkin[] | null;
}

export type Actions =
	| OpenCrateAction
	| IncreaseTotalCratesAction
	| DecreaseTotalCratesAction
	| ResetAllSkinsAction
	| UpdateHorizontalSkinsAction
	| UpdateVerticalSkinsAction
	| UpdateDefaultSkinsAction
	| UpdateDrawnSkinsAction;

export interface CrateTypes {
	horizontalSkins: CrateSkin[];
	verticalSkins: CrateSkin[][];
	drawnSkins: DrawnSkin[] | null;
	defaultSkins: CrateSkin[];
	totalCrates: number;
}

export interface CrateContextTypes {
	state: CrateTypes;
	dispatch: Dispatch<Actions>;
}
