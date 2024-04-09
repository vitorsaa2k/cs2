import { IconContext } from "react-icons";
import { NavItem } from "./navItem";
import { PiCaretDoubleUp, PiShieldCheck } from "react-icons/pi";

export function Nav() {
	return (
		<nav className="flex max-md:px-2 max-md:overflow-x-scroll items-center max-lg:justify-center lg:my-3 gap-4">
			<NavItem
				icon={
					<IconContext.Provider
						value={{ className: "fill-[#8B67AE]", size: "24" }}
					>
						<PiCaretDoubleUp />
					</IconContext.Provider>
				}
				href="/upgrade"
			>
				Upgrader
			</NavItem>
			<NavItem
				icon={
					<IconContext.Provider
						value={{ className: "fill-[#46B858]", size: "24" }}
					>
						<PiShieldCheck />
					</IconContext.Provider>
				}
				href="/provablyfair"
			>
				Provably Fair
			</NavItem>
		</nav>
	);
}
