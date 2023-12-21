import { CrateSkin } from "../../features/crate/types/api";

export function generateSkinsArray(skins: CrateSkin[]) {
	const ARRAY_FINAL_LENGTH = 91;
	const newArray = [];
	for (let i = 0; i < ARRAY_FINAL_LENGTH; i++) {
		const randomNumber = Math.floor(Math.random() * skins.length);
		newArray.push(skins[randomNumber]);
	}
	return newArray;
}
