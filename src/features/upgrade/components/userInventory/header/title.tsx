import { useContext } from "react";
import { UpgradeContext } from "../../../../../contexts/upgradeContext";

export function UserInventoryTitle() {
	const { state } = useContext(UpgradeContext);
	return (
		<div>
			<p>Your Items ({state.userInventory.length})</p>
		</div>
	);
}
