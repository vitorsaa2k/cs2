import { IconContext } from "react-icons";
import { PiMagnifyingGlass } from "react-icons/pi";

export function SearchByNameInput() {
	return (
		<label className="flex items-center gap-1 bg-slate-900 py-2 pl-3 pr-6 rounded">
			<IconContext.Provider value={{ size: "22" }}>
				<PiMagnifyingGlass />
			</IconContext.Provider>
			<input
				placeholder="Name"
				className="bg-transparent p-0 border-none shadow-none focus:outline-none max-w-[144px]"
			/>
		</label>
	);
}
