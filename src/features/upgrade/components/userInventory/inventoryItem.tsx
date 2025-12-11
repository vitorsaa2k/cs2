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
			onClick={() => {
				let maxPrice = 0;
				if (isItemSelected) {
					maxPrice =
						upgradeContext.state.userSkins
							.filter(s => s.rollId != skin.rollId)
							.map(s => s.price)
							.reduce((prevValue, currValue) => prevValue + currValue, 0) *
						upgradeContext.state.multiplier;

					upgradeContext.dispatch({
						type: ActionTypes.REMOVE_USER_SKIN,
						payload: skin,
					});
				} else {
					maxPrice =
						[...upgradeContext.state.userSkins, skin]
							.map(s => s.price)
							.reduce((prevValue, currValue) => prevValue + currValue, 0) *
						upgradeContext.state.multiplier;

					upgradeContext.dispatch({
						type: ActionTypes.ADD_USER_SKIN,
						payload: skin,
					});
				}

				upgradeContext.dispatch({
					type: ActionTypes.UPDATE_AVALIABLE_SKINS_FILTER,
					payload: {
						...upgradeContext.state.avaliableSkinsFilter,
						maxPrice: maxPrice,
					},
				});
			}}
		></SelectableItem>
	);
}
