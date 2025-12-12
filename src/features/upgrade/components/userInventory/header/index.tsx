import { ShowOnlySelectedButton } from "./selected";
import { UserInventorySortButton } from "./sortButton";
import { UserInventoryTitle } from "./title";

export function UserInventoryHeader() {
	return (
		<div className="flex justify-between items-center">
			<UserInventoryTitle />
			<div className="flex gap-2">
				<ShowOnlySelectedButton />
				<UserInventorySortButton />
			</div>
		</div>
	);
}
