import { useContext, useState } from "react";
import { IconContext } from "react-icons";
import { PiSlidersHorizontal } from "react-icons/pi";
import { RaritySelectorModal } from "./raritySelectorModal";
import { ActionTypes, RarityNames } from "@/features/upgrade/contextTypes";
import { UpgradeContext } from "@/contexts/upgradeContext";

export function RaritySelector() {
	const [shouldShow, setShouldShow] = useState(false);
	const [selectedRarity, setSelectedRarity] = useState<RarityNames | false>(
		false
	);
	const { state, dispatch } = useContext(UpgradeContext);
	function handleRaritySelection(rarity: RarityNames | false) {
		setSelectedRarity(rarity);
		dispatch({
			type: ActionTypes.UPDATE_AVALIABLE_SKINS_FILTER,
			payload: {
				...state.avaliableSkinsFilter,
				page: 1,
				rarity: rarity,
			},
		});
		setShouldShow(false);
	}
	return (
		<div className="relative">
			<button
				onClick={() => setShouldShow(prevState => !prevState)}
				className="bg-slate-900 p-2 rounded"
			>
				<IconContext.Provider value={{ size: "22" }}>
					<PiSlidersHorizontal />
				</IconContext.Provider>
			</button>
			{shouldShow && (
				<RaritySelectorModal
					handleRaritySelection={handleRaritySelection}
					currentRarity={selectedRarity}
				/>
			)}
		</div>
	);
}
