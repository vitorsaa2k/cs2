import { UpgradeContextProvider } from "../contexts/upgradeContext";
import { SkinsSection } from "../features/upgrade/components/skinsSection";
import { UpgradeSection } from "../features/upgrade/components/upgradeSection";

export function Upgrade() {
	return (
		<UpgradeContextProvider>
			<UpgradeSection />
			<SkinsSection />
		</UpgradeContextProvider>
	);
}
