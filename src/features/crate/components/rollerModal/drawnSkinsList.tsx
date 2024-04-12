import { useContext } from "react";
import { CrateContext } from "../../context/crateContext/crateContext";
import { Skin } from "./skin";

interface DrawnSkinsListProps {
	soldSkins: string[];
	sellDrawnSkins: (rollIds: string[]) => void;
}

export function DrawnSkinsList({
	soldSkins,
	sellDrawnSkins,
}: DrawnSkinsListProps) {
	const { state } = useContext(CrateContext);
	if (state.drawnSkins === null) {
		return <p>No skins were drawned</p>;
	}
	return (
		<div className="p-1 md:p-2 text-center flex flex-col gap-2 items-center max-h-[468px] overflow-y-auto">
			{state.drawnSkins.map(item => {
				return (
					<Skin
						key={item.rollId}
						item={item}
						sellDrawnSkins={sellDrawnSkins}
						soldSkins={soldSkins}
					/>
				);
			})}
		</div>
	);
}
