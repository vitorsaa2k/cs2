import { CrateSkin } from "../../../features/crate/types/api";
import { parseItemColor } from "@/utils/crate/parseItemColor";
import { getItemExterior } from "@/utils/crate/getItemExterior";
import { SkinImage } from "@/components/skin/skinImage";
import { cn } from "@/libs/utils";

export function DroppedItem({ item }: { item: CrateSkin }) {
	const parsedColor = parseItemColor(item);
	const exterior = getItemExterior(item);

	return (
		<div
			className={`h-[124px] w-[198px] border-b-${parsedColor}-item border-b bg-slate-800 relative rollerItem-${parsedColor}`}
		>
			<div className="w-full h-full absolute flex items-center justify-center">
				<SkinImage className="max-w-[135px]" skin={item} />
			</div>
			<p
				className={cn(`absolute right-0 p-1 text-xs`, {
					"text-orange-500": item.stattrak,
				})}
			>
				{exterior}
			</p>
			<div className="absolute text-xs bottom-0 pl-2 pb-2">
				<p className="font-light line-clamp-1">
					{item.weapon.name.toUpperCase()}
				</p>
				<p className="font-semibold line-clamp-1">{item.pattern.name}</p>
			</div>
		</div>
	);
}
