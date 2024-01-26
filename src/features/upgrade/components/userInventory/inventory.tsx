import { useContext } from "react";
import { InventoryItem } from "./inventoryItem";
import { UpgradeContext } from "../../../../contexts/upgradeContext";

export function Inventory() {
	const upgradeContext = useContext(UpgradeContext);
	return (
		<div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
			{upgradeContext.state.userInventory.map(skin => (
				<InventoryItem key={skin.rollId} skin={skin} />
			))}
		</div>
	);
}
