import { cn } from "../../../../libs/utils";
import { formatPrice } from "../../../../utils/formatPrice";
import { DrawnSkin, SkinType } from "../../../crate/types/api";
import { SkinsImages } from "./skinsImages";
import { UpgradeSkinsName } from "./skinsName";

export type PricePosition = "bottomLeft" | "bottomRight";

export function SelectedItems({
	skins,
	pricePosition,
}: {
	skins: DrawnSkin[] | SkinType[];
	pricePosition: PricePosition;
}) {
	return (
		<div className="flex flex-col h-full w-full justify-between items-center ">
			<SkinsImages pricePosition={pricePosition} skins={skins} />
			<div className="flex justify-between pb-6 w-full">
				<UpgradeSkinsName skins={skins} pricePosition={pricePosition} />
				<p
					className={cn(
						"bg-slate-900 flex items-center font-bold px-6 text-2xl",
						{
							"order-1 pl-24 rounded-r-full": pricePosition === "bottomLeft",
							"order-2 pr-24 rounded-l-full": pricePosition === "bottomRight",
							hidden: skins.length === 0,
						}
					)}
				>
					{formatPrice(
						skins
							.map(s => s.price)
							.reduce((prevValue, currValue) => prevValue + currValue, 0)
					)}
				</p>
			</div>
		</div>
	);
}
