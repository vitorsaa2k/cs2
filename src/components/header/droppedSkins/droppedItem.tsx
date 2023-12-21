import { CrateSkin } from "../../../features/crate/types/api";
import { parseItemNameFull } from "../../../utils/crate/parseItemName";

export function DroppedItem({ item }: { item: CrateSkin }) {
	const parsedColor = item.color.toLowerCase();

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
