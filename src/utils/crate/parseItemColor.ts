import { SkinType } from "../../features/crate/types/api";

export function parseItemColor(item: SkinType) {
	switch (item.rarity_color) {
		case "5e98d9":
			return "blue";
		case "8847ff":
			return "purple";
		case "eb4b4b":
			return "red";
		case "d32ce6":
			return "pink";
		case "e4ae39":
			return "yellow";
		default:
			return "blue";
	}
}
