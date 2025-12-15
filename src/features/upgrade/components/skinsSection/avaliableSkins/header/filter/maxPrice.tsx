import { ChangeEvent, useContext } from "react";
import { ActionTypes } from "@/features/upgrade/contextTypes";
import { UpgradeContext } from "@/contexts/upgradeContext";

export function MaxPriceInput() {
	const { state, dispatch } = useContext(UpgradeContext);
	function handlePriceChange(e: ChangeEvent<HTMLInputElement>) {
		dispatch({
			type: ActionTypes.UPDATE_AVALIABLE_SKINS_FILTER,
			payload: {
				...state.avaliableSkinsFilter,
				maxPrice: Number(e.currentTarget.value),
				page: 1,
			},
		});
	}
	return (
		<label className="flex items-center gap-1 bg-slate-900 py-2 pl-3 pr-6 rounded">
			<input
				placeholder="$ <"
				className="bg-transparent p-0 border-none shadow-none focus:outline-none max-w-[64px]"
				onChange={handlePriceChange}
			/>
		</label>
	);
}
