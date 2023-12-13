import { PiShieldCheck } from "react-icons/pi";
import { SkinType } from "../../../features/crate/types/api";
import { parseItemNameExterior } from "../../../utils/crate/parseItemName";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

export function InventoryItem({ item }: { item: SkinType }) {
	const navigate = useNavigate();
	const itemName = parseItemNameExterior(item.name);
	return (
		<div className="flex border rounded relative">
			<div className="flex flex-col items-center">
				<p>{itemName[0]}</p>
				<p>{itemName[1]}</p>
				<p>{itemName[2]}</p>
				<img
					className="max-w-[250px]"
					src={`https://steamcommunity-a.akamaihd.net/economy/image/${item.icon_url}`}
				/>
			</div>
			<div
				onClick={() =>
					navigate(`/provablyFair?checkRoll=true&rollId=${item.rollId}`)
				}
				title="Check Roll-Id"
				className="absolute bottom-0 right-0 m-3 hover:bg-white/20 hover:cursor-pointer rounded"
			>
				<IconContext.Provider value={{ size: "32" }}>
					<PiShieldCheck />
				</IconContext.Provider>
			</div>
		</div>
	);
}
