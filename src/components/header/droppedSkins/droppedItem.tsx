import { useMemo } from "react";
import { CrateSkin } from "../../../features/crate/types/api";
import {
	parseItemNameExterior,
	parseItemNameFull,
} from "../../../utils/crate/parseItemName";

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
	const parsedSkin = parseItemNameExterior(item.name);
	const exterior = useMemo(() => {
		switch (parsedSkin.exterior) {
			case "Factory New":
				return "FN";
			case "Minimal Wear":
				return "MW";
			case "Field-Tested":
				return "FT";
			case "Well Worn":
				return "WW";
			case "Battle-Scarred":
				return "BS";
			default:
				return "FN";
		}
	}, [parsedSkin.exterior]);

	const itemName = parseItemNameFull(item.name, 24);
	return (
		<div
			className={`h-[124px] w-[198px] border-b-${parsedColor}-item border-b bg-slate-800 relative rollerItem-${parsedColor}`}
		>
			<div className="w-full h-full absolute flex items-center justify-center">
				<img
					className="max-w-[135px]"
					src={`https://steamcommunity-a.akamaihd.net/economy/image/${item.icon_url}`}
				/>
			</div>
			<p
				className={`absolute right-0 p-1 text-xs ${
					parsedSkin.isStatTrak ? "text-orange-500" : ""
				}`}
			>
				{exterior}
			</p>
			<div className="absolute text-xs bottom-0 pl-2 pb-2">
				<div className="font-light">{itemName[0].toUpperCase()}</div>
				<div className="font-semibold">{itemName[1]}</div>
			</div>
		</div>
	);
}
