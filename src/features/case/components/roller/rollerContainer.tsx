import { HTMLAttributes } from "react";

export function RollerContainer(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div className="relative h-[400px] flex items-center w-full border border-black overflow-hidden">
			{props.children}
		</div>
	);
}
