import { useContext } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { SkinsWrapper } from "../skinsWrapper";
import { SelectedItems } from "../selectedItems";

export function UpgradeSkins() {
	const upgradeContext = useContext(UpgradeContext);
	return (
		<SkinsWrapper>
			<SelectedItems skins={upgradeContext.state.skinsUpgrade} />
		</SkinsWrapper>
	);
}
