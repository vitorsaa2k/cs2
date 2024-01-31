import { SkinImage } from "../../../../components/skin/skinImage";
import { SkinName } from "../../../../components/skin/skinName";
import { SkinExterior } from "../../../upgrade/components/selectableItem/skinExterior";
import { SkinPrice } from "../../../upgrade/components/selectableItem/skinPrice";
import { CrateSkin } from "../../types/api";

export function CrateItem({ item }: { item: CrateSkin }) {
	const itemChance = ((item.maxRate - item.minRate) / 10000).toFixed(2);
	return (
		<div
			aria-label="Crate item"
			className="bg-zinc-600 rounded -z-10 relative m-3 flex flex-col items-center w-[160px] justify-around text-white"
		>
			<div className="flex flex-col items-center">
				<SkinName name={item.name} />
				<SkinExterior skin={item} />
				<SkinPrice skin={item} />
			</div>
			<SkinImage className="max-w-[8rem]" skin={item} />
			<p className="bottom-0 left-0 p-1 absolute bg-black/30 rounded-se">
				{itemChance}%
			</p>
		</div>
	);
}
