import { useContext } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";

export function PercentagePreview() {
	const upgradeContext = useContext(UpgradeContext);
	return (
		<div className="flex items-center">
			<div className="w-[10rem] h-[10rem] bg-white rounded-full"></div>
			<p>{upgradeContext.state.successChance}</p>
		</div>
	);
}
