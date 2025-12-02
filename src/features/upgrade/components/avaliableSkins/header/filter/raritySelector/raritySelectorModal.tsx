import { Dispatch, SetStateAction } from "react";
import { RarityNames } from "../../../../../contextTypes";
import { RaritySelectorItem } from "./raritySelectorItem";

interface RaritySelectorModalProps {
	currentRarity: RarityNames | false;
	setSelectedRarity: Dispatch<SetStateAction<RarityNames | false>>;
	setShouldShow: Dispatch<SetStateAction<boolean>>;
}

export function RaritySelectorModal({
	currentRarity,
	setSelectedRarity,
	setShouldShow,
}: RaritySelectorModalProps) {
	return (
		<div className="absolute right-0 text-xs z-50 bg-slate-900 p-3 flex flex-col items-start gap-2 rounded">
			<RaritySelectorItem
				setShouldShow={setShouldShow}
				setSelectedRarity={setSelectedRarity}
				currentRarity={currentRarity}
				rarity="All"
				className="border-transparent"
			>
				ALL
			</RaritySelectorItem>
			<RaritySelectorItem
				setShouldShow={setShouldShow}
				setSelectedRarity={setSelectedRarity}
				rarity="Consumer Grade"
				currentRarity={currentRarity}
				className="border-l-gray-700"
			>
				CONSUMER GRADE
			</RaritySelectorItem>
			<RaritySelectorItem
				setShouldShow={setShouldShow}
				setSelectedRarity={setSelectedRarity}
				rarity="Industrial Grade"
				currentRarity={currentRarity}
				className="border-l-[#5e98d9]"
			>
				INDUSTRIAL GRADE
			</RaritySelectorItem>
			<RaritySelectorItem
				setShouldShow={setShouldShow}
				setSelectedRarity={setSelectedRarity}
				rarity="Mil-Spec Grade"
				currentRarity={currentRarity}
				className="border-l-blue-item"
			>
				MIL-SPEC
			</RaritySelectorItem>
			<RaritySelectorItem
				setShouldShow={setShouldShow}
				setSelectedRarity={setSelectedRarity}
				rarity="Restricted"
				currentRarity={currentRarity}
				className="border-l-purple-item"
			>
				RESTRICTED
			</RaritySelectorItem>
			<RaritySelectorItem
				setShouldShow={setShouldShow}
				setSelectedRarity={setSelectedRarity}
				rarity="Classified"
				currentRarity={currentRarity}
				className="border-l-pink-item"
			>
				CLASSIFIED
			</RaritySelectorItem>
			<RaritySelectorItem
				setShouldShow={setShouldShow}
				setSelectedRarity={setSelectedRarity}
				rarity="Covert"
				currentRarity={currentRarity}
				className="border-l-red-item"
			>
				COVERT
			</RaritySelectorItem>
			<RaritySelectorItem
				setShouldShow={setShouldShow}
				setSelectedRarity={setSelectedRarity}
				rarity="Contraband"
				currentRarity={currentRarity}
				className="border-l-yellow-item"
			>
				EXCEEDINGLY RARE
			</RaritySelectorItem>
		</div>
	);
}
