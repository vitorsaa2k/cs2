import { useState } from "react";
import { IconContext } from "react-icons";
import { PiSlidersHorizontal } from "react-icons/pi";
import { RaritySelectorModal } from "./raritySelectorModal";
import { RarityNames } from "../../../../../contextTypes";

export function RaritySelector() {
	const [shouldShow, setShouldShow] = useState(false);
	const [selectedRarity, setSelectedRarity] = useState<RarityNames | false>(
		false
	);
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
					currentRarity={selectedRarity}
					setSelectedRarity={setSelectedRarity}
					setShouldShow={setShouldShow}
				/>
			)}
		</div>
	);
}
