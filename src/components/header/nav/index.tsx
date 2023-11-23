import { NavItem } from "./navItem";

export function Nav() {
	return (
		<nav className="flex justify-center items-center my-3 gap-12">
			<NavItem>Crates</NavItem>
			<NavItem>Crate Battles</NavItem>
			<NavItem>Upgrader</NavItem>
			<NavItem>Event</NavItem>
			<NavItem>Free Crates</NavItem>
		</nav>
	);
}
