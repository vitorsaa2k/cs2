import { Dispatch } from "react";
import { DrawnSkin, SkinType } from "../crate/types/api";

export enum ActionTypes {
	ADD_USER_SKIN = "ADD_USER_SKIN",
	REMOVE_USER_SKIN = "REMOVE_USER_SKIN",
	ADD_UPGRADE_SKIN = "ADD_UPGRADE_SKIN",
	REMOVE_UPGRADE_SKIN = "REMOVE_UPGRADE_SKIN",
	UPDATE_AVALIABLE_SKINS = "UPDATE_AVALIABLE_SKINS",
	UPDATE_USER_INVENTORY = "UPDATE_USER_INVENTORY",
	UPDATE_SUCCESS_CHANCE = "UPDATE_SUCCESS_CHANCE",
	RESET_UPGRADER = "RESET_UPGRADER",
}

export interface AddUserSkinAction {
	type: ActionTypes.ADD_USER_SKIN;
	payload: DrawnSkin;
}
export interface RemoveUserSkinAction {
	type: ActionTypes.REMOVE_USER_SKIN;
	payload: DrawnSkin;
}
export interface AddUpgradeSkinAction {
	type: ActionTypes.ADD_UPGRADE_SKIN;
	payload: SkinType;
}
export interface RemoveUpgradeSkinAction {
	type: ActionTypes.REMOVE_UPGRADE_SKIN;
	payload: SkinType;
}
export interface UpdateSuccessChanceAction {
	type: ActionTypes.UPDATE_SUCCESS_CHANCE;
	payload: number;
}
export interface UpdateAvaliableSkinsAction {
	type: ActionTypes.UPDATE_AVALIABLE_SKINS;
	payload: SkinType[];
}
export interface UpdateUserInventoryAction {
	type: ActionTypes.UPDATE_USER_INVENTORY;
	payload: DrawnSkin[];
}
export interface ResetUpgraderAction {
	type: ActionTypes.RESET_UPGRADER;
}

export type Actions =
	| AddUserSkinAction
	| RemoveUserSkinAction
	| AddUpgradeSkinAction
	| RemoveUpgradeSkinAction
	| UpdateSuccessChanceAction
	| UpdateAvaliableSkinsAction
	| UpdateUserInventoryAction
	| ResetUpgraderAction;

export interface UpgradeType {
	userSkins: DrawnSkin[];
	userInventory: DrawnSkin[];
	avaliableSkins: SkinType[];
	skinsUpgrade: SkinType[];
	successChance: number;
}

export interface UpgradeContextType {
	state: UpgradeType;
	dispatch: Dispatch<Actions>;
}
