import { MultiplierControl } from "./multiplierControl";
import { UpgradeButton } from "./upgradeButton";

export function ControlSection() {
	return (
		<div className="flex justify-between items-center md:px-60 max-md:flex-col max-lg:justify-center gap-3">
			<MultiplierControl />
			<UpgradeButton />
		</div>
	);
}
