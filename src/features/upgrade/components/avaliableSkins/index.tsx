import { SectionWrapper } from "../sectionWrapper";
import { AvaliableItemsList } from "./avaliableItemsList";
import { AvaliableSkinsHeader } from "./header";
import { UpgradeSkinsPageControl } from "./pageControl";

export function AvaliableSkins() {
	return (
		<SectionWrapper shouldBlockInteractionOnSelect>
			<div className="flex flex-col gap-2">
				<AvaliableSkinsHeader />
				<AvaliableItemsList />
			</div>
			<UpgradeSkinsPageControl />
		</SectionWrapper>
	);
}
