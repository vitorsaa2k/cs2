import { parseItemNameExterior } from "../../../../utils/crate/parseItemName";
import { SkinType } from "../../types/api";

export function CrateItem({ item }: { item: SkinType }) {
	const itemName = parseItemNameExterior(item.name);
	const itemChance = ((item.maxRate - item.minRate) / 10000).toFixed(2);
	return (
		<div className="bg-zinc-600 rounded -z-10 relative m-3 flex flex-col items-center w-[160px] justify-around text-white">
			<div className="flex flex-col items-center">
				<div className="text-sm">{itemName[0]}</div>
				<div className="text-sm">{itemName[1]}</div>
				<div className="text-sm">{itemName[2]}</div>
				<div>${item.price}</div>
			</div>
			<p className="bottom-0 left-0 p-1 absolute bg-black/30 rounded-se">
				{itemChance}%
			</p>
			<img
				className="max-w-[128px]"
				src={`https://steamcommunity-a.akamaihd.net/economy/image/${item.icon_url}`}
			/>
		</div>
	);
}
