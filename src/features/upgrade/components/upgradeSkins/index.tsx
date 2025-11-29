import { useContext } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { SelectedSkinsWrapper } from "../selectedSkinsWrapper";
import { SelectedItems } from "../selectedSkins/selectedItems";

export function UpgradeSkins() {
	const upgradeContext = useContext(UpgradeContext);
	return (
		<SelectedSkinsWrapper>
			<SelectedItems
				pricePosition="bottomLeft"
				skins={upgradeContext.state.skinsUpgrade}
			/>
		</SelectedSkinsWrapper>
	);
}
