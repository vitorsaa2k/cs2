import { RarityNames } from "../../../../../contextTypes";
import { RaritySelectorItem } from "./raritySelectorItem";

interface RaritySelectorModalProps {
	currentRarity: RarityNames | false;
	handleRaritySelection: (rarity: RarityNames | false) => void;
}

export function RaritySelectorModal({
	currentRarity,
	handleRaritySelection,
}: RaritySelectorModalProps) {
	return (
		<div className="absolute right-0 text-xs z-50 bg-slate-900 p-3 flex flex-col items-start gap-2 rounded">
			<RaritySelectorItem
				handleRaritySelection={handleRaritySelection}
				currentRarity={currentRarity}
				rarity="All"
				className="border-transparent"
			>
				ALL
			</RaritySelectorItem>
			<RaritySelectorItem
				handleRaritySelection={handleRaritySelection}
				rarity="Consumer Grade"
				currentRarity={currentRarity}
				className="border-l-gray-700"
			>
				CONSUMER GRADE
			</RaritySelectorItem>
			<RaritySelectorItem
				handleRaritySelection={handleRaritySelection}
				rarity="Industrial Grade"
				currentRarity={currentRarity}
				className="border-l-[#5e98d9]"
			>
				INDUSTRIAL GRADE
			</RaritySelectorItem>
			<RaritySelectorItem
				handleRaritySelection={handleRaritySelection}
				rarity="Mil-Spec Grade"
				currentRarity={currentRarity}
				className="border-l-blue-item"
			>
				MIL-SPEC
			</RaritySelectorItem>
			<RaritySelectorItem
				handleRaritySelection={handleRaritySelection}
				rarity="Restricted"
				currentRarity={currentRarity}
				className="border-l-purple-item"
			>
				RESTRICTED
			</RaritySelectorItem>
			<RaritySelectorItem
				handleRaritySelection={handleRaritySelection}
				rarity="Classified"
				currentRarity={currentRarity}
				className="border-l-pink-item"
			>
				CLASSIFIED
			</RaritySelectorItem>
			<RaritySelectorItem
				handleRaritySelection={handleRaritySelection}
				rarity="Covert"
				currentRarity={currentRarity}
				className="border-l-red-item"
			>
				COVERT
			</RaritySelectorItem>
			<RaritySelectorItem
				handleRaritySelection={handleRaritySelection}
				rarity="Contraband"
				currentRarity={currentRarity}
				className="border-l-yellow-item"
			>
				EXCEEDINGLY RARE
			</RaritySelectorItem>
		</div>
	);
}
