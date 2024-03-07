import { HTMLAttributes, ReactNode } from "react";

type NavItemProps = HTMLAttributes<HTMLDivElement> & {
	href: string;
	icon?: ReactNode;
};

export function NavItem(props: NavItemProps) {
	return (
		<a
			className="bg-slate-900 flex gap-2 drop-shadow-[0_4px_25px_rgba(0,0,0,0.25)] px-10 py-2 rounded-full"
			href={props.href}
		>
			{props.icon}
			{props.children}
		</a>
	);
}
