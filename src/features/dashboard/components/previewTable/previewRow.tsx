import { ChangeEvent, useContext, useState } from "react";
import { SkinCrate } from "../../types";
import { PiTrash } from "react-icons/pi";
import { IconContext } from "react-icons";
import { DashboardContext } from "../../../../contexts/dashboardContext";

export function PreviewRow({ skin }: { skin: SkinCrate }) {
	const crate = useContext(DashboardContext);
	const [percentage, setPercentage] = useState("0");

	function updatePercentage(e: ChangeEvent<HTMLInputElement>) {
		let { value } = e.currentTarget;
		setPercentage(value);
		value.length === 0 ? (value = "0") : null;
		crate.updateSkinCrate({ ...skin, chance: Number(value) });
	}

	return (
		<div className="grid grid-cols-[_1fr_repeat(2,_0.3fr)_0.1fr] gap-3 border items-center">
			<div className="flex items-center justify-center">
				<img
					className="max-w-[80px]"
					src={`https://steamcommunity-a.akamaihd.net/economy/image/${skin.icon_url}`}
				/>
				{skin.name}
			</div>
			<div className="flex justify-center">
				<input
					value={percentage}
					type="number"
					className="bg-transparent max-w-[50px] text-center outline-none border rounded"
					placeholder="%"
					onChange={updatePercentage}
				/>
				%
			</div>
			<div className="flex justify-center items-center">${skin.price}</div>
			<div
				className="hover:bg-red-900 hover:cursor-pointer flex items-center justify-center"
				onClick={() => crate.removeSkinFromCrate(skin)}
			>
				<IconContext.Provider value={{ size: "24" }}>
					<PiTrash />
				</IconContext.Provider>
			</div>
		</div>
	);
}
