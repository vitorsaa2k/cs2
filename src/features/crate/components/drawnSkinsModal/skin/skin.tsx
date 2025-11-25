import { PiCurrencyDollarSimple } from "react-icons/pi";
import { parseItemNameFull } from "../../../../../utils/crate/parseItemName";
import { DrawnSkin } from "../../../types/api";
import { IconContext } from "react-icons";
import { DrawnSkinTitle } from "./drawnSkinTitle";
import { DrawnSkinImage } from "./drawnSkinImage";
import { parseItemColor } from "../../../../../utils/crate/parseItemColor";

interface SkinProps {
	item: DrawnSkin;
	soldSkins: string[];
	sellDrawnSkins: (rollIds: string[]) => void;
}

export function Skin({ item, soldSkins, sellDrawnSkins }: SkinProps) {
	const [weapon, skinName] = parseItemNameFull(item.name, 20);
	const color = parseItemColor(item);
	return (
		<div
			key={item.rollId}
			className="flex flex-col bg-slate-800 p-3 rounded gap-1"
		>
			<DrawnSkinImage iconUrl={item.icon_url} color={color} />
			<DrawnSkinTitle weapon={weapon} skinName={skinName} />
			<button
				className="flex border-green-font border justify-center disabled:border-green-900 disabled:text-green-900 text-green-font px-2 py-1 rounded"
				onClick={() => sellDrawnSkins([item.rollId])}
				disabled={soldSkins.includes(item.rollId)}
			>
				<IconContext.Provider value={{ size: "24" }}>
					<PiCurrencyDollarSimple />
				</IconContext.Provider>
				{item.price}
			</button>
		</div>
	);
}
