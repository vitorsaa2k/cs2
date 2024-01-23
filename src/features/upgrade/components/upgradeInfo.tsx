import { PercentagePreview } from "./percentagePreview";
import { SelectedSkins } from "./selectedSkins";
import { UserSelectedSkins } from "./userSelectedSkins";

export function UpgradeInfo() {
	return (
		<div className="flex gap-2">
			<UserSelectedSkins />
			<PercentagePreview />
			<SelectedSkins />
		</div>
	);
}
