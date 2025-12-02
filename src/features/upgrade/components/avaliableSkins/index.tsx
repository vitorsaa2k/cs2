import { SectionWrapper } from "../sectionWrapper";
import { AvaliableItemsList } from "./avaliableItemsList";
import { AvaliableSkinsHeader } from "./header";
import { UpgradeSkinsPageControl } from "./pageControl";

export function AvaliableSkins() {
	return (
		<SectionWrapper shouldBlockInteractionOnSelect>
			<div>
				<AvaliableSkinsHeader />
				<AvaliableItemsList />
			</div>
			<UpgradeSkinsPageControl />
		</SectionWrapper>
	);
}
