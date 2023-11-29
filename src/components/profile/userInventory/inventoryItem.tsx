import { SkinType } from "../../../features/crate/types/api";
import { parseItemNameExterior } from "../../../utils/crate/parseItemName";

export function InventoryItem({ item }: { item: SkinType }) {
	const itemName = parseItemNameExterior(item.name);
	return (
		<div className="flex border rounded">
			<div className="flex flex-col items-center">
				<p>{itemName[0]}</p>
				<p>{itemName[1]}</p>
				<p>{itemName[2]}</p>
				<img
					className="max-w-[250px]"
					src={`https://steamcommunity-a.akamaihd.net/economy/image/${item.icon_url}`}
				/>
			</div>
		</div>
	);
}
