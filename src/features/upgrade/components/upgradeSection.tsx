import { PercentagePreview } from "./percentagePreview";
import { UpgradeSkins } from "./upgradeSkins";
import { UserSelectedSkins } from "./userSelectedSkins";

export function UpgradeSection() {
	return (
		<div className="flex gap-2 justify-around m-4">
			<UserSelectedSkins />
			<PercentagePreview />
			<UpgradeSkins />
		</div>
	);
}
