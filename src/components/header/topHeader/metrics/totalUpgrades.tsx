import { IconContext } from "react-icons";
import { PiCaretDoubleUp } from "react-icons/pi";

export function TotalUpgrades({ totalUpgrades }: { totalUpgrades?: number }) {
	return (
		<div className="flex">
			<IconContext.Provider value={{ className: "fill-[#8B67AE]", size: "24" }}>
				<PiCaretDoubleUp />
			</IconContext.Provider>
			<p>{totalUpgrades} Upgrades</p>
		</div>
	);
}
