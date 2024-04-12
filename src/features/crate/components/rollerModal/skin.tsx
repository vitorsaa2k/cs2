import { decodeEntities } from "../../../../utils/decodeHTML";
import { DrawnSkin } from "../../types/api";

interface SkinProps {
	item: DrawnSkin;
	soldSkins: string[];
	sellDrawnSkins: (rollIds: string[]) => void;
}

export function Skin({ item, soldSkins, sellDrawnSkins }: SkinProps) {
	return (
		<div
			key={item.rollId}
			className="flex flex-col items-center justify-center"
		>
			<h3 className="font-normal text-gray-300">{decodeEntities(item.name)}</h3>
			<img
				className="max-w-[200px]"
				src={`https://steamcommunity-a.akamaihd.net/economy/image/${item.icon_url}`}
			/>
			<button
				className="border border-green-800 disabled:border-green-950 px-2 py-1 rounded"
				onClick={() => sellDrawnSkins([item.rollId])}
				disabled={soldSkins.includes(item.rollId)}
			>
				Sell skin ${item.price}
			</button>
		</div>
	);
}
