import { PiShieldCheckBold } from "react-icons/pi";
import { DrawnSkin } from "../../../features/crate/types/api";
import { parseItemNameFull } from "../../../utils/crate/parseItemName";
import { IconContext } from "react-icons";
import { sellSkins } from "../../../services/userApi";
import { queryClient } from "../../../libs/queryClient";
import { SkinExterior } from "@/components/skin/skinExterior";
import { parseItemColor } from "@/utils/crate/parseItemColor";

const colorMap: Record<string, string> = {
	red: "hover:border-red-item",
	blue: "hover:border-blue-item",
	pink: "hover:border-pink-item",
	purple: "hover:border-purple-item",
	yellow: "hover:border-yellow-item",
};

export function InventoryItem({
	item,
	isPublic,
}: {
	item: DrawnSkin;
	isPublic?: boolean;
}) {
	const itemName = parseItemNameFull(item.name, 30);
	const itemColor = parseItemColor(item);
	async function sellInventorySkin() {
		await sellSkins([item.rollId]);
		queryClient.invalidateQueries({ queryKey: ["inventory"] });
	}
	return (
		<div
			className={`flex border border-transparent rounded relative transition-all bg-slate-800 ${colorMap[itemColor]} p-2`}
		>
			<div className="flex w-full h-full relative flex-col items-center">
				<img
					className="max-w-[132px]"
					src={`https://steamcommunity-a.akamaihd.net/economy/image/${item.icon_url}`}
				/>
				<p className="line-clamp-1 text-sm">{itemName[0]}</p>
				<div className="flex items-center gap-1">
					<p
						className={`font-bold text-sm text-${itemColor}-item line-clamp-1`}
						title={itemName[1]}
					>
						{itemName[1]}
					</p>
					<a
						href={`/provablyFair?checkRoll=true&rollId=${item.rollId}`}
						title="Check Roll-Id"
						className="hover:cursor-pointer"
					>
						<IconContext.Provider value={{ size: "16" }}>
							<PiShieldCheckBold />
						</IconContext.Provider>
					</a>
				</div>
				<SkinExterior
					className="absolute right-0 text-xs font-bold"
					skin={item}
				/>
				{isPublic ? (
					<div></div>
				) : (
					<button
						onClick={sellInventorySkin}
						className="bg-green-font bottom-0 p-1 font-bold rounded w-full"
					>
						Sell ${item.price}
					</button>
				)}
			</div>
		</div>
	);
}
