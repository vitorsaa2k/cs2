import { UserInventorySortButton } from "./sortButton";
import { UserInventoryTitle } from "./title";

export function UserInventoryHeader() {
	return (
		<div className="flex justify-between items-center">
			<UserInventoryTitle />
			<UserInventorySortButton />
		</div>
	);
}
