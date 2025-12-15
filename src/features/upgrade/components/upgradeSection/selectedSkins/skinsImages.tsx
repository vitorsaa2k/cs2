import { SkinType } from "@/features/crate/types/api";
import { PricePosition } from "./selectedItems";
import { cn } from "@/libs/utils";
import { SkinImage } from "@/components/skin/skinImage";

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
				"flex flex-wrap justify-center items-center w-full h-full overflow-hidden p-1",
				{
					"lg:pl-24": pricePosition === "bottomLeft",
					"lg:pr-24": pricePosition === "bottomRight",
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
