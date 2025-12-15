import { useContext } from "react";
import { InventoryItem } from "./inventoryItem";
import { UpgradeContext } from "@/contexts/upgradeContext";
import { SkinsWrapper } from "../../skinsSection/skinsWrapper";

export function Inventory() {
	const upgradeContext = useContext(UpgradeContext);

	const itemsToDisplay = upgradeContext.state.userInventoryFilter
		.shouldShowSelected
		? upgradeContext.state.userSkins
		: upgradeContext.state.userInventory;

	return (
		<SkinsWrapper>
			{itemsToDisplay.map(skin => (
				<InventoryItem key={skin.rollId} skin={skin} />
			))}
		</SkinsWrapper>
	);
}
