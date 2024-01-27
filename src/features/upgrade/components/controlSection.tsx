import { MultiplierControl } from "./multiplierControl";
import { UpgradeButton } from "./upgradeButton";

export function ControlSection() {
	return (
		<div className="flex justify-around m-4">
			<MultiplierControl />
			<UpgradeButton />
		</div>
	);
}
