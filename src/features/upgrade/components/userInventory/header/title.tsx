import { useContext } from "react";
import { UpgradeContext } from "../../../../../contexts/upgradeContext";

export function UserInventoryTitle() {
	const { state } = useContext(UpgradeContext);
	return (
		<div className="max-md:hidden">
			<p>Your Items ({state.userInventory.length})</p>
		</div>
	);
}
