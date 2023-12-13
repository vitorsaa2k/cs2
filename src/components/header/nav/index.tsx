import { NavItem } from "./navItem";

export function Nav() {
	return (
		<nav className="flex flex-col md:flex-row justify-center items-center my-3 gap-12">
			<NavItem href="/">Crates</NavItem>
			<NavItem href="/battles">Crate Battles</NavItem>
			<NavItem href="/upgrade">Upgrader</NavItem>
			<NavItem href="/event">Event</NavItem>
			<NavItem href="/freecase">Free Crates</NavItem>
			<NavItem href="/provablyfair">Provably Fair</NavItem>
		</nav>
	);
}
