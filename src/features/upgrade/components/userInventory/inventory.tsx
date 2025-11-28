import { useContext } from "react";
import { InventoryItem } from "./inventoryItem";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { SkinsWrapper } from "../skinsSection/skinsWrapper";

export function Inventory() {
	const upgradeContext = useContext(UpgradeContext);
	return (
		<SkinsWrapper>
			{upgradeContext.state.userInventory.map(skin => (
				<InventoryItem key={skin.rollId} skin={skin} />
			))}
		</SkinsWrapper>
	);
}
