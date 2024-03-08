import { IconContext } from "react-icons";
import { PiCaretDoubleUp } from "react-icons/pi";

export function TotalUpgrades() {
	return (
		<div className="flex">
			<IconContext.Provider value={{ className: "fill-[#8B67AE]", size: "24" }}>
				<PiCaretDoubleUp />
			</IconContext.Provider>
			<p>xxxx Upgrades</p>
		</div>
	);
}
