import { SkinType } from "../../../features/crate/types/api";
import { parseItemNameFull } from "../../../utils/crate/parseItemName";

export function DroppedSkin({ skin }: { skin: SkinType }) {
	const parsedColor = skin.color.toLowerCase();

	const itemName = parseItemNameFull(skin.name);
	return (
		<div
			className={` flex flex-col items-center justify-center rollerItem-${parsedColor}`}
		>
			<img
				className="max-w-[128px]"
				src={`https://steamcommunity-a.akamaihd.net/economy/image/${skin.icon_url}`}
			/>
			<div className="text-xs">{itemName[0]}</div>
			<div className="text-xs">{itemName[1]}</div>
		</div>
	);
}
