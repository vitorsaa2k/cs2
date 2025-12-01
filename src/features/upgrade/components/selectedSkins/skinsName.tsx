import { cn } from "../../../../libs/utils";
import { parseItemNameFull } from "../../../../utils/crate/parseItemName";
import { DrawnSkin, SkinType } from "../../../crate/types/api";
import { PricePosition } from "./selectedItems";

export function UpgradeSkinsName({
	pricePosition,
	skins,
}: {
	pricePosition: PricePosition;
	skins: SkinType[] | DrawnSkin[];
}) {
	const [weaponName, skinName] =
		skins.length !== 0 ? parseItemNameFull(skins[0].name) : "";

	return (
		<div
			className={cn("flex flex-col px-6", {
				"order-1": pricePosition === "bottomRight",
				"order-2": pricePosition === "bottomLeft",
			})}
		>
			{skins.length > 1 ? (
				<div
					className={cn("flex flex-col", {
						"items-startw text-left": pricePosition === "bottomRight",
						"items-end text-right": pricePosition === "bottomLeft",
					})}
				>
					<p className="text-2xl font-bold leading-[29px]">
						{skins.length} Items
					</p>
					<p
						className={cn("leading-[19px] hidden", {
							block: pricePosition === "bottomLeft",
						})}
					>
						That you want to receive
					</p>
					<p
						className={cn("leading-[19px] hidden", {
							block: pricePosition === "bottomRight",
						})}
					>
						That you want to upgrade
					</p>
				</div>
			) : (
				<div
					className={cn("flex flex-col", {
						"items-start text-start": pricePosition === "bottomRight",
						"items-end text-end": pricePosition === "bottomLeft",
					})}
				>
					<p className="font-bold text-2xl leading-[29px]">{skinName}</p>
					<p className="font-normal text-base leading-[19px]">{weaponName}</p>
				</div>
			)}
		</div>
	);
}
