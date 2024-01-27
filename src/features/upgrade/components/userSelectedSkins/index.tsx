import { useContext } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { SelectedSkinsWrapper } from "../selectedSkinsWrapper";
import { SelectedItems } from "../selectedSkins/selectedItems";

export function UserSelectedSkins() {
	const upgradeContext = useContext(UpgradeContext);
	return (
		<SelectedSkinsWrapper>
			<SelectedItems skins={upgradeContext.state.userSkins} />
		</SelectedSkinsWrapper>
	);
}
