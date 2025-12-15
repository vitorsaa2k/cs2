import { UpgradeContextProvider } from "@/contexts/upgradeContext";
import { Upgrade } from "../features/upgrade";

export default function UpgradePage() {
	return (
		<UpgradeContextProvider>
			<Upgrade />
		</UpgradeContextProvider>
	);
}
