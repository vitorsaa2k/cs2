import { HTMLAttributes } from "react";
import { SkinName } from "../../../../components/skin/skinName";
import { DrawnSkin, SkinType } from "../../../crate/types/api";
import { SkinImage } from "../../../../components/skin/skinImage";
import { SkinExterior } from "./skinExterior";
import { SkinPrice } from "./skinPrice";

interface SelectableItemProps extends HTMLAttributes<HTMLDivElement> {
	skin: DrawnSkin | SkinType;
	isSelected?: boolean;
}

export function SelectableItem({
	isSelected,
	skin,
	...props
}: SelectableItemProps) {
	return (
		<div
			{...props}
			className={`flex flex-col relative min-h-[13rem] max-w-[130px] items-center justify-around hover:cursor-pointer border rounded ${
				isSelected ? "border-green-400 border-2" : ""
			}`}
		>
			<SkinImage className="max-w-[128px]" skin={skin} />
			<SkinExterior className="absolute top-0 left-0 text-xs m-1" skin={skin} />
			<SkinPrice className="absolute top-0 right-0 text-xs m-1" skin={skin} />
			<div className="flex flex-col items-center">
				<SkinName name={skin.name} />
			</div>
		</div>
	);
}
