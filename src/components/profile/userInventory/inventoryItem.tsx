import { PiShieldCheck } from "react-icons/pi";
import { SkinType } from "../../../features/crate/types/api";
import { parseItemNameExterior } from "../../../utils/crate/parseItemName";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { sellSkins } from "../../../services/userApi";
import { queryClient } from "../../../libs/queryClient";

export function InventoryItem({ item }: { item: SkinType }) {
	const navigate = useNavigate();
	const itemName = parseItemNameExterior(item.name);
	async function sellInventorySkin() {
		await sellSkins([item.rollId]);
		queryClient.invalidateQueries({ queryKey: ["inventory"] });
	}
	return (
		<div className="flex border rounded relative">
			<div className="flex group relative flex-col items-center">
				<p>{itemName[0]}</p>
				<p>{itemName[1]}</p>
				<p>{itemName[2]}</p>
				<img
					className="max-w-[250px]"
					src={`https://steamcommunity-a.akamaihd.net/economy/image/${item.icon_url}`}
				/>
				<button
					onClick={sellInventorySkin}
					className="bg-green-800 hidden group-hover:block group-hover:animate-opacity-up animate-opacity-down group-hover:absolute bottom-0 left-0 right-0 w-full py-1"
				>
					Sell ${item.price}
				</button>
			</div>
			<div
				onClick={() =>
					navigate(`/provablyFair?checkRoll=true&rollId=${item.rollId}`)
				}
				title="Check Roll-Id"
				className="absolute top-0 right-0 m-3 hover:bg-white/20 hover:cursor-pointer rounded"
			>
				<IconContext.Provider value={{ size: "32" }}>
					<PiShieldCheck />
				</IconContext.Provider>
			</div>
		</div>
	);
}
