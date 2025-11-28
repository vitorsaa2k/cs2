import { useContext } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { AvaliableItem } from "./avaliableItem";
import { SkinsWrapper } from "../skinsSection/skinsWrapper";

export function AvaliableItemsList() {
	const upgradeContext = useContext(UpgradeContext);
	return (
		<div className="w-full relative p-2">
			<SkinsWrapper>
				{upgradeContext.state.avaliableSkins.skins.map(skin => (
					<AvaliableItem key={skin.name} skin={skin} />
				))}
			</SkinsWrapper>
		</div>
	);
}
