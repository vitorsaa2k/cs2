import { PercentagePreview } from "./percentagePreview";
import { UpgradeSkins } from "./upgradeSkins";
import { UserSelectedSkins } from "./userSelectedSkins";

export function UpgradeSection() {
	return (
		<div className="lg:h-[20rem] flex lg:relative items-center lg:justify-center max-lg:flex-col max-lg:gap-3 lg:gap-36 m-6 lg:bg-slate-800 rounded-lg">
			<UserSelectedSkins />
			<PercentagePreview />
			<UpgradeSkins />
		</div>
	);
}
