import { useContext } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { AvaliableItem } from "./avaliableItem";
import { SkinsWrapper } from "../skinsSection/skinsWrapper";

export function AvaliableItemsList() {
	const upgradeContext = useContext(UpgradeContext);
	const itemsToDisplay = upgradeContext.state.avaliableSkinsFilter
		.shouldShowSelected
		? upgradeContext.state.skinsUpgrade
		: upgradeContext.state.avaliableSkins.skins;
	return (
		<div className="w-full relative">
			<SkinsWrapper>
				{itemsToDisplay.map(skin => (
					<AvaliableItem key={skin.name} skin={skin} />
				))}
			</SkinsWrapper>
		</div>
	);
}
