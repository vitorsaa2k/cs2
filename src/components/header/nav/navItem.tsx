import { HTMLAttributes } from "react";

export function NavItem(props: HTMLAttributes<HTMLDivElement>) {
	return <div>{props.children}</div>;
}
