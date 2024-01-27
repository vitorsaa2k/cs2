import { useContext } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { AvaliableItem } from "./avaliableItem";

export function AvaliableItemsList() {
	const upgradeContext = useContext(UpgradeContext);
	return (
		<div className="p-4 rounded bg-zinc-950 flex items-center justify-center">
			<div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
				{upgradeContext.state.avaliableSkins.map(skin => (
					<AvaliableItem key={skin.name} skin={skin} />
				))}
			</div>
		</div>
	);
}
