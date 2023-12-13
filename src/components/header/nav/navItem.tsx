import { HTMLAttributes } from "react";

type NavItemProps = HTMLAttributes<HTMLDivElement> & {
	href: string;
};

export function NavItem(props: NavItemProps) {
	return <a href={props.href}>{props.children}</a>;
}
