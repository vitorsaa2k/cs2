import { UpgradeContextProvider } from "../contexts/upgradeContext";
import { ControlSection } from "../features/upgrade/components/controlSection";
import { SkinsSection } from "../features/upgrade/components/skinsSection/skinsSection";
import { UpgradeSection } from "../features/upgrade/components/upgradeSection";

export default function Upgrade() {
	return (
		<UpgradeContextProvider>
			<UpgradeSection />
			<ControlSection />
			<SkinsSection />
		</UpgradeContextProvider>
	);
}
