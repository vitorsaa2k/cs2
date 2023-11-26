import { SkinType } from "../../features/crate/types/api";

export function generateSkinsArray(skins: SkinType[]) {
	const ARRAY_FINAL_LENGTH = 90;
	const newArray = [];
	for (let i = 0; i < ARRAY_FINAL_LENGTH; i++) {
		const randomNumber = Math.floor(Math.random() * skins.length);
		newArray.push(skins[randomNumber]);
	}
	return newArray;
}
