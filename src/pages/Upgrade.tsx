import { UpgradeContextProvider } from "../contexts/upgradeContext";
import { ControlSection } from "../features/upgrade/components/controlSection";
import { SkinsSection } from "../features/upgrade/components/skinsSection";
import { UpgradeSection } from "../features/upgrade/components/upgradeSection";

export function Upgrade() {
	return (
		<UpgradeContextProvider>
			<UpgradeSection />
			<ControlSection />
			<SkinsSection />
		</UpgradeContextProvider>
	);
}
