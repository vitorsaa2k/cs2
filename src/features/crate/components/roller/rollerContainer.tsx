import { HTMLAttributes } from "react";

export function RollerContainer(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div className="relative h-[400px] flex items-center w-[1500px] border border-black overflow-hidden">
			{props.children}
		</div>
	);
}
