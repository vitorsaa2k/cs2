import { useContext } from "react";
import { SkinType } from "../../../crate/types/api";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { ActionTypes } from "../../contextTypes";
import { SelectableItem } from "../selectableItem/selectableItem";

export function AvaliableItem({ skin }: { skin: SkinType }) {
	const upgradeContext = useContext(UpgradeContext);
	const isItemSelected = upgradeContext.state.skinsUpgrade
		.map(skin => skin.name)
		.includes(skin.name);
	return (
		<SelectableItem
			skin={skin}
			isSelected={isItemSelected}
			onClick={() =>
				isItemSelected
					? upgradeContext.dispatch({
							type: ActionTypes.REMOVE_UPGRADE_SKIN,
							payload: skin,
					  })
					: upgradeContext.dispatch({
							type: ActionTypes.ADD_UPGRADE_SKIN,
							payload: skin,
					  })
			}
		></SelectableItem>
	);
}
