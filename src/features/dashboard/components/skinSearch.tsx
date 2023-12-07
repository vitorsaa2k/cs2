import { useContext, useEffect, useState } from "react";
import { getSkinByName } from "../../../services/skinsApi";
import { useDebounce } from "../../../hooks/useDebounce";
import { SkinCrate } from "../types";
import { DashboardContext } from "../../../contexts/dashboardContext";

export function SkinSearch() {
	const [skinName, setSkinName] = useState("");
	const [skinsArray, setSkinsArray] = useState<SkinCrate[]>([]);
	const crate = useContext(DashboardContext);

	async function searchOnDb() {
		const skins = await getSkinByName(skinName);
		setSkinsArray(skins);
	}

	const searchDebounce = useDebounce(searchOnDb, 600);

	useEffect(() => {
		searchDebounce();
		skinName.length === 0 ? setSkinsArray([]) : null;
	}, [skinName]);

	return (
		<div className="flex flex-col items-center m-4">
			<input
				className="text-black"
				value={skinName}
				onChange={e => {
					setSkinName(e.currentTarget.value);
				}}
			/>
			<div className="max-h-[300px] overflow-auto overflow-x-hidden">
				{skinsArray.map((skin, index) => {
					return (
						<div
							className="flex items-center justify-center hover:bg-green-900 hover:cursor-pointer"
							key={index}
							onClick={() => crate.addSkinToCrate(skin)}
						>
							<img
								className="max-w-[80px]"
								src={`https://steamcommunity-a.akamaihd.net/economy/image/${skin.icon_url}`}
							/>
							{skin.name}
						</div>
					);
				})}
			</div>
		</div>
	);
}
