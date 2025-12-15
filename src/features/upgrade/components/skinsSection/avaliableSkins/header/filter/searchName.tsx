import { ChangeEvent, useContext } from "react";
import { IconContext } from "react-icons";
import { PiMagnifyingGlass } from "react-icons/pi";
import { ActionTypes } from "@/features/upgrade/contextTypes";
import { UpgradeContext } from "@/contexts/upgradeContext";

export function SearchByNameInput() {
	const { state, dispatch } = useContext(UpgradeContext);
	function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
		dispatch({
			type: ActionTypes.UPDATE_AVALIABLE_SKINS_FILTER,
			payload: {
				...state.avaliableSkinsFilter,
				name: e.currentTarget.value,
				page: 1,
			},
		});
	}

	return (
		<label className="flex items-center gap-1 bg-slate-900 py-2 pl-3 pr-6 rounded max-md:w-full">
			<IconContext.Provider value={{ size: "22" }}>
				<PiMagnifyingGlass />
			</IconContext.Provider>
			<input
				placeholder="Name"
				className="bg-transparent p-0 border-none shadow-none focus:outline-none max-w-[144px]"
				onChange={handleNameChange}
			/>
		</label>
	);
}
