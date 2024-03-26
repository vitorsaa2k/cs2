import { formatPrice } from "../../../../utils/formatPrice";
import { SkinExterior } from "../../../upgrade/components/selectableItem/skinExterior";
import { CrateSkin } from "../../types/api";

interface SkinDetailsProps {
	item: CrateSkin;
}

export function SkinDetails({ item }: SkinDetailsProps) {
	const itemChance = ((item.maxRate - item.minRate) / 10000).toFixed(2);
	return (
		<div className="w-full h-full flex gap-2 absolute z-50 bg-black/30 backdrop-blur transition-opacity group-hover:opacity-100 opacity-0 ">
			<SkinExterior skin={item} />
			<p>{formatPrice(item.price)}</p>
			<p>
				{item.minRate}-{item.maxRate}
			</p>
			<p>{itemChance}%</p>
		</div>
	);
}
