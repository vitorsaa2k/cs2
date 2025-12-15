import { useContext, useEffect } from "react";
import { UpgradeContext } from "@/contexts/upgradeContext";
import { ActionTypes } from "@/features/upgrade/contextTypes";
import { cn } from "@/libs/utils";

export function ShowOnlySelectedButton() {
	const { state, dispatch } = useContext(UpgradeContext);
	function switchShouldShowSelected(value: boolean) {
		dispatch({
			type: ActionTypes.UPDATE_AVALIABLE_SKINS_FILTER,
			payload: {
				...state.avaliableSkinsFilter,
				shouldShowSelected: value,
			},
		});
	}

	useEffect(() => {
		if (state.skinsUpgrade.length === 0) switchShouldShowSelected(false);
		//eslint-disable-next-line
	}, [state.skinsUpgrade.length]);
	return (
		<button
			disabled={state.skinsUpgrade.length === 0}
			onClick={() => {
				switchShouldShowSelected(
					state.avaliableSkinsFilter.shouldShowSelected ? false : true
				);
			}}
			className={cn(
				"bg-slate-900 p-2 border border-transparent rounded hover:cursor-pointer disabled:bg-slate-900/40 disabled:text-white/40",
				{
					"border border-green-font text-green-font":
						state.avaliableSkinsFilter.shouldShowSelected,
				}
			)}
		>
			Selected
		</button>
	);
}
