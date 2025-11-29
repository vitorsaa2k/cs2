import { PercentagePreview } from "./percentagePreview";
import { UpgradeSkins } from "./upgradeSkins";
import { UserSelectedSkins } from "./userSelectedSkins";

export function UpgradeSection() {
	return (
		<div className="h-[20rem] flex relative justify-center gap-36 m-6 bg-slate-800 rounded-lg">
			<UserSelectedSkins />
			<PercentagePreview />
			<UpgradeSkins />
		</div>
	);
}
