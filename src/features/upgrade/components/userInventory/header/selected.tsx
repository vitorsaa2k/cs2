import { useContext, useEffect } from "react";
import { cn } from "../../../../../libs/utils";
import { UpgradeContext } from "../../../../../contexts/upgradeContext";
import { ActionTypes } from "../../../contextTypes";

export function ShowOnlySelectedButton() {
	const { state, dispatch } = useContext(UpgradeContext);
	function switchShouldShowSelected(value: boolean) {
		dispatch({
			type: ActionTypes.UPDATE_USER_INVENTORY_FILTER,
			payload: {
				...state.userInventoryFilter,
				shouldShowSelected: value,
			},
		});
	}

	useEffect(() => {
		if (state.userSkins.length === 0) switchShouldShowSelected(false);
		//eslint-disable-next-line
	}, [state.userSkins.length]);
	return (
		<button
			disabled={state.userSkins.length === 0}
			onClick={() => {
				switchShouldShowSelected(
					state.userInventoryFilter.shouldShowSelected ? false : true
				);
			}}
			className={cn(
				"bg-slate-900 p-2 border border-transparent rounded hover:cursor-pointer disabled:bg-slate-900/40 disabled:text-white/40",
				{
					"border border-green-font text-green-font":
						state.userInventoryFilter.shouldShowSelected,
				}
			)}
		>
			Selected
		</button>
	);
}
