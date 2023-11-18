import { NavItem } from "./navItem";

export function Nav() {
	return (
		<nav className="flex justify-center items-center gap-12">
			<NavItem>Cases</NavItem>
			<NavItem>Case Battles</NavItem>
			<NavItem>Upgrader</NavItem>
			<NavItem>Event</NavItem>
			<NavItem>Free Cases</NavItem>
		</nav>
	);
}
