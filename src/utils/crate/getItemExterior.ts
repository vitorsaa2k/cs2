import { SkinType } from "@/features/crate/types/api";

export function getItemExterior(item: SkinType) {
	switch (item.wear.name) {
		case "Factory New":
			return "FN";
		case "Minimal Wear":
			return "MW";
		case "Field-Tested":
			return "FT";
		case "Well-Worn":
			return "WW";
		case "Battle-Scarred":
			return "BS";
		default:
			return "FN";
	}
}
