import { useMemo } from "react";
import { CrateSkin } from "../../../features/crate/types/api";
import { parseItemNameFull } from "../../../utils/crate/parseItemName";

export function DroppedItem({ item }: { item: CrateSkin }) {
	const parsedColor = useMemo(() => {
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
	}, [item.rarity_color]);

	const itemName = parseItemNameFull(item.name);
	return (
		<div
			className={`w-full h-full flex flex-col items-center justify-center rollerItem-${parsedColor}`}
		>
			<img
				className="max-w-[128px]"
				src={`https://steamcommunity-a.akamaihd.net/economy/image/${item.icon_url}`}
			/>
			<div>{itemName[0]}</div>
			<div>{itemName[1]}</div>
		</div>
	);
}
