import { useContext, useEffect, useState } from "react";
import { getSkinByName } from "../../../services/skinsApi";
import { useDebounce } from "../../../hooks/useDebounce";
import { SkinCrate } from "../types";
import { DashboardContext } from "../../../contexts/dashboardContext";
import { TailSpinner } from "../../../components/spinner";

export function SkinSearch() {
	const [skinName, setSkinName] = useState("");
	const [skinsArray, setSkinsArray] = useState<SkinCrate[]>([]);
	const [isFetching, setIsFetching] = useState(false);
	const crate = useContext(DashboardContext);

	async function searchOnDb() {
		if (skinName.length > 0) {
			setIsFetching(true);
			const skins = await getSkinByName(skinName);
			setSkinsArray(skins);
			setIsFetching(false);
		}
	}

	const searchDebounce = useDebounce(searchOnDb, 600);

	useEffect(() => {
		searchDebounce();
		skinName.length === 0 ? setSkinsArray([]) : null;
	}, [skinName]);

	return (
		<div className="flex flex-col items-center m-4">
			<label className="flex gap-1">
				Skin name:
				<input
					className="text-black outline-none"
					value={skinName}
					onChange={e => {
						setSkinName(e.currentTarget.value);
					}}
				/>
				{isFetching && skinsArray.length == 0 ? (
					<TailSpinner height={20} width={20} visible />
				) : null}
			</label>
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
