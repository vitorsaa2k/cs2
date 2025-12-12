import { useContext } from "react";
import { UpgradeContext } from "../../../../../contexts/upgradeContext";
import { ActionTypes } from "../../../contextTypes";

export function UserInventorySortButton() {
	const { state, dispatch } = useContext(UpgradeContext);
	return (
		<button
			onClick={() =>
				dispatch({
					type: ActionTypes.UPDATE_USER_INVENTORY_FILTER,
					payload: {
						...state.userInventoryFilter,
						sort: state.userInventoryFilter.sort === "ASC" ? "DESC" : "ASC",
					},
				})
			}
			className="bg-slate-900 p-2 rounded hover:cursor-pointer"
		>
			Price
			{state.userInventoryFilter.sort === "DESC" ? <>&#8595;</> : <>&uarr;</>}
		</button>
	);
}
