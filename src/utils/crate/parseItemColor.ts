import { SkinType } from "../../features/crate/types/api";

export function parseItemColor(item: SkinType) {
	let rarity = "";
	switch (item.rarity.name) {
		case "Mil-Spec Grade":
			rarity = "blue";
			break;
		case "Restricted":
			rarity = "purple";
			break;
		case "Covert":
			rarity = "red";
			break;
		case "Classified":
			rarity = "pink";
			break;
		case "Extraordinary":
			rarity = "yellow";
			break;
		default:
			rarity = "blue";
			break;
	}
	if (item.category.name === "Knives") rarity = "yellow";
	return rarity;
}
