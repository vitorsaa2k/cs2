import { ControlSection } from "./components/controlSection/controlSection";
import { SkinsSection } from "./components/skinsSection/skinsSection";
import { UpgradeSection } from "./components/upgradeSection/upgradeSection";

export function Upgrade() {
	return (
		<>
			<UpgradeSection />
			<ControlSection />
			<SkinsSection />
		</>
	);
}
