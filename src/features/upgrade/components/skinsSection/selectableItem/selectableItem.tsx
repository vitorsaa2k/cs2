import { HTMLAttributes } from "react";
import { SkinExterior } from "@/components/skin/skinExterior";
import { SkinPrice } from "./skinPrice";
import { SkinTitle } from "./skinTitle";
import { IconContext } from "react-icons";
import { PiCheckBold, PiPlusBold } from "react-icons/pi";
import { DrawnSkin, SkinType } from "@/features/crate/types/api";
import { parseItemColor } from "@/utils/crate/parseItemColor";
import { SkinImage } from "@/components/skin/skinImage";
import { cn } from "@/libs/utils";

interface SelectableItemProps extends HTMLAttributes<HTMLDivElement> {
	skin: DrawnSkin | SkinType;
	isSelected?: boolean;
}

export function SelectableItem({
	isSelected,
	skin,
	...props
}: SelectableItemProps) {
	const color = parseItemColor(skin);
	return (
		<div
			{...props}
			className={`flex flex-col relative items-center gap-4 hover:cursor-pointer border-t bg-slate-800 border-t-${color}-item rounded-lg text-xs group`}
		>
			{isSelected && (
				<div className="absolute flex items-center justify-center rounded-lg h-full w-full bg-black/40 z-10">
					<div className="bg-green-font drop-shadow-[0_0_7px_rgba(70,184,88,0.25)] shadow-[0_0_30px_rgba(77,153,76)] p-2 rounded-full flex items-center justify-center">
						<IconContext.Provider value={{ size: "28" }}>
							<PiCheckBold />
						</IconContext.Provider>
					</div>
				</div>
			)}
			{!isSelected && (
				<div className="absolute opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg h-full w-full bg-black/40 z-10 transition-opacity">
					<div className="bg-slate-400 p-2 rounded-full flex items-center justify-center">
						<IconContext.Provider value={{ size: "28" }}>
							<PiPlusBold />
						</IconContext.Provider>
					</div>
				</div>
			)}
			<div className="flex justify-between w-full">
				<SkinExterior className="m-1" skin={skin} />
				<SkinPrice className="m-1" skin={skin} />
			</div>
			<SkinImage
				className={cn(
					"max-w-[128px] z-0 transition-all mx-1",
					isSelected ? "" : "group-hover:scale-75"
				)}
				skin={skin}
			/>
			<div className="flex flex-col items-center">
				<SkinTitle skinName={skin.name} />
			</div>
		</div>
	);
}
