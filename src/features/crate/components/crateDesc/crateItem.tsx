import { useMemo } from "react";
import { SkinImage } from "../../../../components/skin/skinImage";
import { CrateSkin } from "../../types/api";
import { parseItemColor } from "../../../../utils/crate/parseItemColor";
import { BgVector } from "./bgVector";
import { SkinInfo } from "./skinInfo";
import { formatPrice } from "../../../../utils/formatPrice";
export function CrateItem({ item }: { item: CrateSkin }) {
	const parsedColor = useMemo(() => {
		return parseItemColor(item);
	}, [item]);
	const itemChance = ((item.maxRate - item.minRate) / 10000).toFixed(2);
	return (
		<div
			aria-label="Crate item"
			className={`rounded border-${parsedColor}-item border group radialItem-${parsedColor} bg-slate-800 relative flex items-center w-[19.25rem] h-[11.5rem]`}
		>
			<div className="flex flex-col absolute bottom-0 p-3 text-base">
				<SkinInfo skin={item} />
			</div>
			<div className="relative w-full h-full flex items-center justify-center">
				<SkinImage className="max-w-[12.5rem] z-[1]" skin={item} />
				<BgVector item={item} />
			</div>
			<p className="top-0 left-0 p-2 absolute font-light">
				{formatPrice(item.price)}
			</p>
			<p className="top-0 right-0 p-2 absolute font-light">{itemChance}%</p>
		</div>
	);
}
