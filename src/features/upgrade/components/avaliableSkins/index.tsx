import { SectionWrapper } from "../sectionWrapper";
import { AvaliableItemsList } from "./avaliableItemsList";
import { UpgradeSkinsPageControl } from "./pageControl";

export function AvaliableSkins() {
	return (
		<SectionWrapper shouldBlockInteractionOnSelect>
			<AvaliableItemsList />
			<UpgradeSkinsPageControl />
		</SectionWrapper>
	);
}
