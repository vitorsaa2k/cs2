import { SectionWrapper } from "../../sectionWrapper";
import { UserInventoryHeader } from "./header";
import { Inventory } from "./inventory";
import { InventoryPageControl } from "./pageControl";

export function UserInventory() {
	return (
		<SectionWrapper>
			<div className="flex flex-col gap-2">
				<UserInventoryHeader />
				<Inventory />
			</div>
			<InventoryPageControl />
		</SectionWrapper>
	);
}
