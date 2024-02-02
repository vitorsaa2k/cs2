import { useContext } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { AvaliableItem } from "./avaliableItem";
import { Wrapper } from "../skinsSection/wrapper";

export function AvaliableItemsList() {
	const upgradeContext = useContext(UpgradeContext);
	return (
		<div className="relative">
			<Wrapper>
				{upgradeContext.state.avaliableSkins.skins.map(skin => (
					<AvaliableItem key={skin.name} skin={skin} />
				))}
			</Wrapper>
			{upgradeContext.state.avaliableSkins.isFetching && (
				<div className="w-full h-full absolute top-0 rounded animate-opacity-up bg-black/50"></div>
			)}
		</div>
	);
}
