import { SectionWrapper } from "../sectionWrapper";
import { Inventory } from "./inventory";
import { InventoryPageControl } from "./pageControl";

export function UserInventory() {
	return (
		<SectionWrapper>
			<Inventory />
			<InventoryPageControl />
		</SectionWrapper>
	);
}
