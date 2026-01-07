import { SkinImage } from "@/components/skin/skinImage";
import { parseItemNameFull } from "../../../../../../utils/crate/parseItemName";
import { CrateSkin } from "../../../../types/api";

export function RollerItem({ item }: { item: CrateSkin }) {
	const parsedColor = item.color.toLowerCase();

	const itemName = parseItemNameFull(item.name);
	return (
		<div
			className={`w-full h-[400px] flex flex-col items-center justify-center rollerItem-${parsedColor}`}
		>
			<SkinImage className="max-w-[250px]" skin={item} />
			<div>{itemName[0]}</div>
			<div>{itemName[1]}</div>
		</div>
	);
}
