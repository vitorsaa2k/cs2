import { parseItemNameFull } from "../../../../utils/crate/parseItemName";
import { DrawnSkin, SkinType } from "../../../crate/types/api";
import { SkinsImages } from "./skinsImages";

export function SelectedItems({ skins }: { skins: DrawnSkin[] | SkinType[] }) {
	const skinName = skins.length !== 0 ? parseItemNameFull(skins[0].name) : "";
	return (
		<div className="flex flex-col h-full justify-between items-center">
			<div></div>
			<div className="flex flex-wrap">
				<SkinsImages skins={skins} />
			</div>
			<div className="flex justify-between w-full mb-2">
				<div className="ml-2">
					{skins.length > 1 ? (
						<p>{skins.length} selected items</p>
					) : (
						<>
							<p>{skinName[0]}</p>
							<p>{skinName[1]}</p>
						</>
					)}
				</div>
				<p className="bg-zinc-900 flex rounded-s p-1 items-center">
					$
					{skins
						.map(s => s.price)
						.reduce((prevValue, currValue) => prevValue + currValue, 0)}
				</p>
			</div>
		</div>
	);
}
