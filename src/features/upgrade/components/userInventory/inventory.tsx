import { useContext } from "react";
import { InventoryItem } from "./inventoryItem";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { Wrapper } from "../skinsSection/wrapper";

export function Inventory() {
	const upgradeContext = useContext(UpgradeContext);
	return (
		<div className="relative">
			<Wrapper>
				{upgradeContext.state.userInventory.map(skin => (
					<InventoryItem key={skin.rollId} skin={skin} />
				))}
			</Wrapper>
		</div>
	);
}
