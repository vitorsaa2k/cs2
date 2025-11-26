import { parseItemNameFull } from "../../../../utils/crate/parseItemName";

export function SkinTitle({ skinName }: { skinName: string }) {
	const [weapon, skin] = parseItemNameFull(skinName, 20);
	return (
		<div className="flex flex-col items-center">
			<p className="line-clamp-1">{weapon}</p>
			<p className="font-bold line-clamp-1">{skin}</p>
		</div>
	);
}
