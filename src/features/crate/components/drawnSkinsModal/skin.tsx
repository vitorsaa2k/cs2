import { PiCurrencyDollarSimple } from "react-icons/pi";
import { parseItemNameFull } from "../../../../utils/crate/parseItemName";
import { DrawnSkin } from "../../types/api";
import { IconContext } from "react-icons";

interface SkinProps {
	item: DrawnSkin;
	soldSkins: string[];
	sellDrawnSkins: (rollIds: string[]) => void;
}

export function Skin({ item, soldSkins, sellDrawnSkins }: SkinProps) {
	const [weapon, skinName] = parseItemNameFull(item.name);
	return (
		<div
			key={item.rollId}
			className="flex flex-col bg-slate-800 p-3 rounded gap-1"
		>
			<div className="relative">
				<div className="absolute z-0 top-1/4 left-1/3 w-16 h-16 bg-purple-item blur-xl rounded-full"></div>
				<img
					className="max-w-[176px] relative z-10"
					src={`https://steamcommunity-a.akamaihd.net/economy/image/${item.icon_url}`}
				/>
			</div>
			<div className="flex flex-col items-start w-full">
				<p className="font-normal text-xs">{weapon}</p>
				<p className="font-semibold text-xs">{skinName}</p>
			</div>
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
