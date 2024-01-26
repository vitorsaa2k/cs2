import { HTMLAttributes } from "react";
import { SkinName } from "../../../components/skin/skinName";
import { DrawnSkin, SkinType } from "../../crate/types/api";
import { SkinImage } from "../../../components/skin/skinImage";

interface SelectableItemProps extends HTMLAttributes<HTMLDivElement> {
	skin: DrawnSkin | SkinType;
	isSelected?: boolean;
}

export function SelectableItem(props: SelectableItemProps) {
	return (
		<div
			{...props}
			className={`flex flex-col items-center hover:cursor-pointer border ${
				props.isSelected ? "border-green-400" : ""
			}`}
		>
			<SkinImage className="max-w-[128px]" skin={props.skin} />
			<div className="flex flex-col items-center">
				<SkinName name={props.skin.name} />
				<p>${props.skin.price}</p>
			</div>
		</div>
	);
}
