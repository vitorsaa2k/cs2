import { SkinImage } from "@/components/skin/skinImage";
import { CrateSkin } from "../../../types/api";

export function RollerItem({ item }: { item: CrateSkin }) {
	const parsedColor = item?.color.toLowerCase();

	return (
		<div
			className={`w-full h-[400px] flex flex-col items-center justify-center rollerItem-${parsedColor}`}
		>
			<SkinImage className="max-w-[250px]" skin={item} />
			<div>{item.weapon.name}</div>
			<div>{item.pattern.name}</div>
		</div>
	);
}
