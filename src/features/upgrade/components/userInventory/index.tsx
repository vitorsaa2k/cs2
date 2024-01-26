import { Inventory } from "./inventory";
import { InventoryPageControl } from "./pageControl";

export function UserInventory() {
	return (
		<div>
			<Inventory />
			<InventoryPageControl />
		</div>
	);
}
