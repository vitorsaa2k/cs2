import { useContext } from "react";
import { UpgradeContext } from "../../../../../../contexts/upgradeContext";
import { ActionTypes } from "../../../../contextTypes";

export function AvaliableSkinsSortButton() {
	const { state, dispatch } = useContext(UpgradeContext);

	return (
		<button
			onClick={() =>
				dispatch({
					type: ActionTypes.UPDATE_AVALIABLE_SKINS_FILTER,
					payload: {
						...state.avaliableSkinsFilter,
						sort: state.avaliableSkinsFilter.sort === "ASC" ? "DESC" : "ASC",
						page: 1,
					},
				})
			}
			className="bg-slate-900 p-2 rounded hover:cursor-pointer"
		>
			Price{" "}
			{state.avaliableSkinsFilter.sort === "DESC" ? <>&uarr;</> : <>&#8595;</>}
		</button>
	);
}
