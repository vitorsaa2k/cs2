import { parseItemNameFull } from "../../../../utils/crate/parseItemName";
import { SkinType } from "../../types/api";

export function SkinInfo({ skin }: { skin: SkinType }) {
	const name = parseItemNameFull(skin.name, 24);
	return (
		<div className="flex w-full flex-col items-start justify-start">
			<p className="text-xs font-light">{name[0]}</p>
			<p className="text-base font-semibold">{name[1]}</p>
		</div>
	);
}
