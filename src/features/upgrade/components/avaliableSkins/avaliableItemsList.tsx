import { useContext } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { AvaliableItem } from "./avaliableItem";
import { Wrapper } from "../skinsSection/wrapper";

export function AvaliableItemsList() {
	const upgradeContext = useContext(UpgradeContext);
	return (
		<Wrapper>
			{upgradeContext.state.avaliableSkins.map(skin => (
				<AvaliableItem key={skin.name} skin={skin} />
			))}
		</Wrapper>
	);
}
