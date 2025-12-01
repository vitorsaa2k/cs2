import { useContext } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { SelectedSkinsWrapper } from "../selectedSkinsWrapper";
import { SelectedItems } from "../selectedSkins/selectedItems";
import { EmptySelectedSkinsDefaultDisplay } from "../selectedSkins/defaultDisplay";

export function UserSelectedSkins() {
	const upgradeContext = useContext(UpgradeContext);
	return (
		<SelectedSkinsWrapper>
			{upgradeContext.state.userSkins.length === 0 ? (
				<EmptySelectedSkinsDefaultDisplay type="itemToUpgrade" />
			) : (
				<SelectedItems
					pricePosition="bottomRight"
					skins={upgradeContext.state.userSkins}
				/>
			)}
		</SelectedSkinsWrapper>
	);
}
