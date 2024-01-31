import { useContext } from "react";
import { DrawnSkin } from "../../../crate/types/api";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { ActionTypes } from "../../contextTypes";
import { SelectableItem } from "../selectableItem/selectableItem";

export function InventoryItem({ skin }: { skin: DrawnSkin }) {
	const upgradeContext = useContext(UpgradeContext);
	const isItemSelected = upgradeContext.state.userSkins
		.map(skin => skin.rollId)
		.includes(skin.rollId);
	return (
		<SelectableItem
			skin={skin}
			isSelected={isItemSelected}
			onClick={() =>
				isItemSelected
					? upgradeContext.dispatch({
							type: ActionTypes.REMOVE_USER_SKIN,
							payload: skin,
					  })
					: upgradeContext.dispatch({
							type: ActionTypes.ADD_USER_SKIN,
							payload: skin,
					  })
			}
		></SelectableItem>
	);
}
