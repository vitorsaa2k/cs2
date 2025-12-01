import { useContext } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { SelectedSkinsWrapper } from "../selectedSkinsWrapper";
import { SelectedItems } from "../selectedSkins/selectedItems";
import { EmptySelectedSkinsDefaultDisplay } from "../selectedSkins/defaultDisplay";

export function UpgradeSkins() {
	const upgradeContext = useContext(UpgradeContext);
	return (
		<SelectedSkinsWrapper>
			{upgradeContext.state.skinsUpgrade.length === 0 ? (
				<EmptySelectedSkinsDefaultDisplay type="itemToReceive" />
			) : (
				<SelectedItems
					pricePosition="bottomLeft"
					skins={upgradeContext.state.skinsUpgrade}
				/>
			)}
		</SelectedSkinsWrapper>
	);
}
