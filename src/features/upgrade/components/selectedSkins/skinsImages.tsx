import { SkinImage } from "../../../../components/skin/skinImage";
import { SkinType } from "../../../crate/types/api";
import { cn } from "../../../../libs/utils";
import { PricePosition } from "./selectedItems";

export function SkinsImages({
	skins,
	pricePosition,
}: {
	skins: SkinType[];
	pricePosition: PricePosition;
}) {
	return (
		<div
			className={cn(
				"flex flex-wrap justify-center items-center w-full h-full overflow-hidden",
				{
					"pl-24": pricePosition === "bottomLeft",
					"pr-24": pricePosition === "bottomRight",
				}
			)}
		>
			{skins.map(skin => (
				<SkinImage
					key={crypto.randomUUID()}
					className={cn({
						"max-w-[256px]": skins.length === 1,
						"max-w-[148px]": skins.length > 1,
						"max-w-[88px]": skins.length > 6,
					})}
					skin={skin}
				/>
			))}
		</div>
	);
}
