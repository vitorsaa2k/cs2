import { IconContext } from "react-icons";
import { PiPackage } from "react-icons/pi";

export function TotalCrates() {
	return (
		<div className="flex">
			<IconContext.Provider value={{ className: "fill-[#BC4848]", size: "24" }}>
				<PiPackage />
			</IconContext.Provider>
			<p>xxxx Crates</p>
		</div>
	);
}
