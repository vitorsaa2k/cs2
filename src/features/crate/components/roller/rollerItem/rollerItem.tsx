import { parseItemNameFull } from "../../../../../utils/crate/parseItemName";
import { CrateSkin } from "../../../types/api";
import "./rolleItem.css";

export function RollerItem({ item }: { item?: CrateSkin }) {
	const parsedColor = item?.color.toLowerCase();

	const itemName = item ? parseItemNameFull(item.name) : "";
	return (
		<div
			className={`w-full h-[400px] flex flex-col items-center justify-center rollerItem-${parsedColor}`}
		>
			<img
				className="max-w-[250px]"
				src={`https://steamcommunity-a.akamaihd.net/economy/image/${item?.icon_url}`}
			/>
			<div>{itemName[0]}</div>
			<div>{itemName[1]}</div>
		</div>
	);
}
