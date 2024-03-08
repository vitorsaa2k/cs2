import { IconContext } from "react-icons";
import { PiSword } from "react-icons/pi";

export function TotalBattles() {
	return (
		<div className="flex">
			<IconContext.Provider value={{ className: "fill-[#468796]", size: "24" }}>
				<PiSword />
			</IconContext.Provider>
			<p>xxxx Battles</p>
		</div>
	);
}
